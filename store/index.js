export const state = () => ({
  categories: [],
  isLoading: false,
})

export const getters = {
  categories(state) {
    return state.categories
  }
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_LOADING(state, status) {
    state.isLoading = status
  }
}

export const actions = {
  async nuxtServerInit({commit, dispatch}) {
    let response = await this.$axios.$get('categories')

    commit('SET_CATEGORIES', response.data)

    // if (this.$auth.loggedIn) {
    //   await dispatch('cart/getCart')
    // }

  }
}
