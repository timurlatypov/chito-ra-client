import queryString from 'query-string'

export const state = () => ({
  products: [],
  isEmpty: true,
  subtotal: null,
  total: null,
  changed: false,
  shipping: null,
  minAmount: false,
  workingTime: false,
})

export const getters = {
  products(state) {
    return state.products
  },

  count(state) {
    return state.products.length
  },

  isEmpty(state) {
    return state.isEmpty
  },

  subtotal(state) {
    return state.subtotal
  },

  total(state) {
    return state.total
  },

  changed(state) {
    return state.changed
  },

  shipping(state) {
    return state.shipping
  },

  minAmount(state) {
    return state.minAmount
  },

  workingTime(state) {
    return state.workingTime
  }
}

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },

  SET_EMPTY(state, empty) {
    state.isEmpty = empty
  },

  SET_SUBTOTAL(state, subtotal) {
    state.subtotal = subtotal
  },

  SET_TOTAL(state, total) {
    state.total = total
  },

  SET_CHANGED(state, changed) {
    state.changed = changed
  },

  SET_SHIPPING(state, shipping) {
    state.shipping = shipping
  },

  SET_MIN_AMOUNT(state, min) {
    state.minAmount = min
  },

  SET_WORKING_TIME(state, payload) {
    state.workingTime = payload
  }
}

export const actions = {
  async getCart({commit}) {
    let query = {}

    let response = await this.$axios.$get(`cart?${queryString.stringify(query)}`)

    commit('SET_PRODUCTS', response.data.products)
    commit('SET_EMPTY', response.meta.empty)
    commit('SET_SUBTOTAL', response.meta.subtotal)
    commit('SET_TOTAL', response.meta.total)
    commit('SET_CHANGED', response.meta.changed)
    commit('SET_MIN_AMOUNT', response.meta.min_amount)
    commit('SET_WORKING_TIME', response.meta.working_time)

    return response
  },

  async destroy({dispatch}, productId) {
    let response = await this.$axios.$delete(`cart/${productId}`)

    dispatch('getCart')
  },

  async update({dispatch}, {productId, quantity}) {
    let response = await this.$axios.$patch(`cart/${productId}`, {
      quantity
    })

    dispatch('getCart')
  },

  async store({dispatch, commit}, products) {
    let response = await this.$axios.$post('cart', {
      products
    })

    dispatch('getCart')
  },

  async setShipping({commit}, shipping) {
    commit('SET_SHIPPING', shipping)
  }
}
