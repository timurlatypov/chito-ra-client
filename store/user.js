export const state = () => ({
  user: null,
  access_token: null,
  refresh_token: null,
  authenticated: false
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setAuthenticated(state, payload) {
    state.authenticated = payload
  },
  setTokens(state, tokens) {
    state.access_token = tokens.access_token || null
    state.refresh_token = tokens.refresh_token || null
  }
}

export const actions = {
  logout({commit}) {
    commit('setUser', null)
    commit('setAuthenticated', false)
    commit('setTokens', {})

    this.$cookies.remove('access_token')
    this.$cookies.remove('refresh_token')
  },
  updateTokens({commit}, tokens) {
    const cookieOptions = {
      path: '/',
      maxAge: 14 * 24 * 60 * 60
    }

    commit('setTokens', tokens)

    this.$cookies.set('access_token', tokens.access_token, cookieOptions)
    this.$cookies.set('refresh_token', tokens.refresh_token, cookieOptions)
  },
  async fetchUser({commit, state}) {
    const accessToken = state.access_token

    if (accessToken) {
      await this.$axios
        .$get(`${process.env.oauthUrl}api/oauth/user`)
        .then(({data: user}) => {
          commit('setUser', user)
          commit('setAuthenticated', true)
        })
        .catch((e) => {
          //
        })
    }
  },
  refreshTokens({state, dispatch}) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`${process.env.oauthUrl}api/oauth/refresh/`, {params: {token: state.refresh_token}})
        .then(async ({data: tokens}) => {
          await dispatch('updateTokens', tokens)
          resolve(tokens)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },

  async autoLogin({dispatch, commit, state}) {
    const tokens = {
      access_token: this.$cookies.get('access_token'),
      refresh_token: this.$cookies.get('refresh_token')
    }

    if (tokens.access_token && tokens.refresh_token && !state.user) {
      commit('setTokens', tokens)
      await dispatch('fetchUser')
      await dispatch('cart/getCart', null, {root: true})
    }
  },
  async fakeAuth({dispatch, state}) {
    if (!state.access_token) {
      await dispatch('updateTokens', {
        access_token: process.env.fakeUserTokens.access_token,
        refresh_token: process.env.fakeUserTokens.refresh_token
      })
    }

    await dispatch('fetchUser')
  }
}

export const getters = {
  getUser: (state) => {
    return state.user
  },
  getAccessToken: (state) => {
    return state.access_token
  },
  getRefreshToken: (state) => {
    return state.refresh_token
  },
  isAuthenticated: (state) => {
    return state.authenticated
  }
}
