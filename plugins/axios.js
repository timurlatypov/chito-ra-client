export default function ({$axios, store}) {
  $axios.interceptors.request.use((request) => {
    const accessToken = store.getters['user/getAccessToken']

    if (accessToken) {
      request.headers.common.Authorization = `Bearer ${accessToken}`
    }

    return request
  })

  let isRefreshing = false
  let failedQueue = []

  const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => error ? prom.reject(error) : prom.resolve(token))
    failedQueue = []
  }

  $axios.onError((error) => {
    const originalRequest = error.config

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({resolve, reject})
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`

            return $axios(originalRequest)
          }).catch((err) => {
            throw err
          })
      }

      originalRequest._retry = true
      isRefreshing = true

      return new Promise(async (resolve, reject) => {
        await store.dispatch('user/refreshTokens')
          .then((tokens) => {
            originalRequest.headers.Authorization = `Bearer ${tokens.access_token}`

            processQueue(null, tokens.access_token)

            resolve($axios(originalRequest))
          })
          .catch(async (error) => {
            await store.dispatch('user/logout')

            processQueue(error, null)

            reject(error)
          })
          .finally(() => {
            isRefreshing = false
          })
      })
    }
    return error
  })
}
