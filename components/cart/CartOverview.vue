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
    <h4 class="text-left md:text-center pt-2 font-bold text-black">{{ subtotal }}</h4>
    <div class="mt-4 text-sm text-center text-black">Заказы принимаются <b>с 11:00 до 21:30</b> ежедневно.</div>
    <div class="text-sm text-center text-black">Доставка заказов <b>бесплатно от 1000 рублей.</b></div>
    <div class="text-center text-sm text-black">Доставляем по Москве в пределах МКАД.</div>
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
