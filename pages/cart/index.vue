<template>
  <section>
    <TheNavigation/>
    <TheCartHeader/>

    <TheContent>
      <h1 class="title text-center is-4">Ваша корзина</h1>
      <article v-if="products.length" class="p-2 sm:p-6">
        <CartOverview/>
      </article>
      <article v-else>
        <p class="text-center">Тут сейчас пусто</p>
      </article>

      <div class="text-center py-4">
        <button @click.prevent="$router.push({ name: 'delivery'})"
                class="m-2 transition duration-300 ease-in-out hover:text-white uppercase text-gray-700 border-gray-700 hover:bg-gray-700 px-4 py-2 md:px-6 md:py-4 text font-bold rounded-full border-2">
          Меню&nbsp;доставки
        </button>
        <button @click.prevent="minAmount ? $router.push({ name: 'checkout'}) : ''"
                v-if="!empty"
                :class="minAmount ? 'text-gray-700 hover:text-white border-gray-700 hover:bg-gray-700' : 'bg-gray-300 text-white'"
                class="m-2 transition duration-300 ease-in-out uppercase px-4 py-2 md:px-6 md:py-4 text font-bold rounded-full border-2">
          Оформить&nbsp;заказ
        </button>
      </div>

    </TheContent>
    <TheFooter/>
  </section>


</template>

<script>
  import {mapGetters} from 'vuex'
  import CartOverview from '@/components/cart/CartOverview'

  export default {
    components: {
      CartOverview
    },
    middleware: [
      'redirectIfGuest'
    ],
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        empty: 'cart/isEmpty',
        products: 'cart/products',
        changed: 'cart/changed',
        minAmount: 'cart/minAmount'
      })
    },
  }
</script>

<style lang="scss">

</style>
