<template>
  <div class="overflow-x-auto py-0 px-0 sm:px-6">
    <CartOverviewProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
    <p class="text-center text-lg text-black pt-4">Общая сумма:</p>
    <h4 class="text-center pt-2 font-bold text-black">{{ subtotal }}</h4>
    <div class="mt-4 text-sm text-center text-black">Заказы принимаются <b>с 11:00 до 21:30</b> ежедневно.</div>
    <div class="text-sm text-center text-black"><b>Минимальный заказ от 1000 рублей.</b></div>
    <div class="text-center text-sm text-black">Доставляем <b>бесплатно</b> по Москве в пределах МКАД.</div>
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
  }
</script>

<style lang="scss">

</style>
