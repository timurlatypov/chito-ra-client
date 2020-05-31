<template>
  <div class="overflow-x-auto py-0 px-2 sm:px-6">
    <div class="flex justify-between">
      <div class="w-32 flex-none px-2 py-2"></div>
      <div class="w-64 flex-none px-6 py-3"></div>
      <div class="w-32 flex-none self-center font-bold text-black px-6">Кол-во</div>
      <div class="w-32 flex-none px-6 py-3"></div>
      <div class="w-32 flex-none px-6 py-3 "></div>
    </div>
    <CartOverviewProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <p class="text-left md:text-center text-lg text-black pt-4">Общая сумма:</p>
    <p class="text-left md:text-center text-lg font-bold text-black">{{ subtotal }}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import CartOverviewProduct from './CartOverviewProduct'

  export default {
    components: {
      CartOverviewProduct
    },
    data() {
      return {}
    },
    computed: {
      ...mapGetters({
        products: 'cart/products',
        subtotal: 'cart/subtotal'
      })
    },
    methods: {},
    mounted() {

    }
  }
</script>

<style lang="scss">

</style>
