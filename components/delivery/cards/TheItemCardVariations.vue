<template>
  <div class="flex flex-col">
      <div class="w-full text-sm text-red-500" v-show="variations[0].min_order > 1">Минимальный заказ {{
        variations[0].min_order }} шт.
      </div>
      <div class="font-bold text-gray-700 pb-4">{{ variations[0].price }}&nbsp;&nbsp;<div class="font-normal text-sm inline-block">{{ variations[0].vol }}&nbsp;{{ variations[0].measure_type }} <span v-show="variations[0].min_order > 1">/&nbsp;1&nbsp;шт.</span></div></div>


  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    props: {
      variations: {
        required: true,
        type: Array
      },
      type: {
        required: true,
        type: String
      }
    },
    computed: {
      ...mapGetters({
        authenticated: 'user/isAuthenticated',
        products: 'cart/products',
        changed: 'cart/changed'
      }),

    },
    methods: {
      ...mapActions({
        store: 'cart/store'
      }),
      isAdded(id) {
        return this.products.find((element) => element.id === id);
      },
      add(id, minAmount) {
        if (this.authenticated) {
          this.store([{
            id: id, quantity: minAmount
          }])
        } else {
          this.$modal.show('auth');
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
