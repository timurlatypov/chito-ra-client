<template>
  <section>
    <TheNavigation/>
    <TheCartHeader/>

    <TheContent>

      <ShippingAddress
        class="mb-6"
        :addresses="addresses"
        v-model="form.address_id"/>

      <h4 class="text-center pt-6">Ваш заказ</h4>
      <article v-if="products.length" class="p-6">
        <CartOverview/>
      </article>
      <article v-else>
        <div class="text-center p-6">Нет товаров в заказе</div>
      </article>

      <div class="text-center">
        <button @click.prevent="$router.push({ name: 'delivery'})"
                class="m-2 transition duration-300 ease-in-out hover:text-white uppercase text-gray-700 border-gray-700 hover:bg-gray-700 px-4 py-2 md:px-6 md:py-4 text font-bold rounded-full border-2">
          Меню&nbsp;доставки
        </button>
        <button @click.prevent="minAmount && workingTime && addresses.length > 0 ? order() : ''"
                :class="minAmount && workingTime && addresses.length > 0 ? 'text-gray-700 hover:text-white border-gray-700 hover:bg-gray-700' : 'bg-gray-300 text-white'"
                class="m-2 transition duration-300 ease-in-out uppercase px-4 py-2 md:px-6 md:py-4 text font-bold rounded-full border-2">
          Оформить&nbsp;заказ!
        </button>
        <div class="p-4 text-sm text-center text-red-500" v-show="!addresses.length > 0">
          Создайте адрес доставки или выберите ранее сохраненный!
        </div>
        <div class="p-4 text-sm text-center text-red-500 font-bold" v-if="!workingTime">
          Нерабочее время ресторана
        </div>
        <div class="p-4 text-sm text-center text-red-500" v-if="timeError">
          {{ timeError }}
        </div>
      </div>

    </TheContent>
    <TheFooter className="extra-padding"/>
  </section>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  import CartOverview from '@/components/cart/CartOverview'
  import ShippingAddress from '@/components/checkout/addresses/ShippingAddress'

  export default {
    components: {
      CartOverview,
      ShippingAddress
    },
    middleware: [
      'redirectIfGuest'
    ],
    data() {
      return {
        timeError: null,
        addresses: [],
        shipping_methods: [],
        form: {
          address_id: null
        }
      }
    },
    watch: {
      shippingMethodId() {
        this.getCart()
      }
    },
    computed: {
      ...mapGetters({
        total: 'cart/total',
        products: 'cart/products',
        empty: 'cart/empty',
        shipping: 'cart/shipping',
        minAmount: 'cart/minAmount',
        workingTime: 'cart/workingTime',
      }),

      shippingMethodId: {
        get() {
          return this.shipping ? this.shipping.id : ''
        },
        set(shippingMethodId) {
          this.setShipping(
            this.shipping_methods.find(s => s.id === shippingMethodId)
          )
        }
      }

    },
    methods: {
      ...mapActions({
        setShipping: 'cart/setShipping',
        getCart: 'cart/getCart',
      }),

      order() {
        this.timeError = null;

        this.$axios.$post('orders', {
          ...this.form,
          shipping_method_id: this.shippingMethodId
        })
          .then((response) => {
            this.getCart()
          })
          .catch((error) => {
            console.log(error.response);
            this.timeError = error.response.data.error;
          })

      }
    },

    async asyncData({app}) {
      let addresses = await app.$axios.$get('addresses')
      let shippingMethods = await app.$axios.$get('shipping')

      return {
        addresses: addresses.data,
        shipping_methods: shippingMethods.data
      }
    },
    created() {
      this.setShipping(this.shipping_methods[0])
    }
  }
</script>

<style lang="scss">

</style>
