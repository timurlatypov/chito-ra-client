<template>
  <div class="flex justify-between">
    <div>
      <div class="w-full text-sm text-red-500" v-show="variations[0].min_order > 1">Минимальный заказ {{
        variations[0].min_order }} шт.
      </div>
      <div class="font-bold text-gray-700 pb-3">{{ variations[0].price }}&nbsp;<span
        v-show="variations[0].min_order > 1">/&nbsp;1&nbsp;шт.</span></div>
      <div class="font-italic font-sm text-sm m-0 p-0 text-gray-500">{{ variations[0].name }}&nbsp;{{
        variations[0].measure_type }}
      </div>
    </div>
    <div class="absolute right-0 bottom-0 pb-3 pr-2">
      <template v-if="isAdded(variations[0].id)">
        <a
          class="transition no-underline duration-300 ease-in-out uppercase bg-gray-200 border border-gray-200 text-yellow-600 hover:text-yellow-600 px-4 py-2 text-sm font-bold rounded-full"
        >
            <span class="icon is-cursor-pointer">
              <i class="fas fa-star fa-sm"></i>
            </span>
          &nbsp;Добавлен
        </a>
      </template>
      <template v-else>
        <a @click.prevent="add(variations[0].id, variations[0].min_order)"
           class="transition no-underline duration-300 ease-in-out uppercase bg-gray-200 border border-gray-200 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full"
        >
          <nobr>
            <span class="icon is-cursor-pointer">
              <i class="fas fa-shopping-cart fa-sm"></i>
            </span>
            &nbsp;В корзину
          </nobr>
        </a>
      </template>
    </div>
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
