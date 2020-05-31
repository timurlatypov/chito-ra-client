<template>
  <section>
    <TheNavigation/>
    <TheCartHeader/>

    <TheContent>
      <h1 class="title text-center is-4">Ваша корзина</h1>
      <article v-if="products.length" class="p-6">
        <CartOverview/>
      </article>
      <article v-else>
        <p class="text-center">Тут сейчас пусто</p>
      </article>

      <div class="text-center py-4">
        <nuxt-link :to="{ name: 'delivery' }"
                   class="inline-block mb-4 transition duration-300 ease-in-out hover:text-white uppercase text-gray-700 border-gray-700 hover:bg-gray-700 px-4 py-2 md:px-6 md:py-4 ml-0 md:ml-4 text font-bold rounded-full border-2">
          Меню&nbsp;доставки
        </nuxt-link>
        <nuxt-link :to="{ name: 'checkout' }" v-if="!empty"
                   class="inline-block mb-4 transition duration-300 ease-in-out hover:text-white uppercase text-gray-700 border-gray-700 hover:bg-gray-700 px-4 py-2 md:px-6 md:py-4 ml-0 md:ml-4 text font-bold rounded-full border-2">
          Оформить&nbsp;заказ
        </nuxt-link>
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
        changed: 'cart/changed'
      })
    },
  }
</script>

<style lang="scss">

</style>
