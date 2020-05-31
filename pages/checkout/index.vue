<template>
  <section>
    <TheNavigation/>
    <TheCartHeader/>

    <TheContent>

      <ShippingAddress
        class="mb-6"
        :addresses="addresses"
        v-model="form.address_id"/>

      <h4 class="text-center">Ваш заказ</h4>
      <article v-if="products.length" class="p-6">
        <CartOverview/>
      </article>
      <article v-else>
        Нет товаров в заказе

        <nuxt-link :to="{ name: 'delivery' }"
                   class="transition duration-300 ease-in-out hover:text-white uppercase text-gray-700 border-gray-700 hover:bg-gray-700 px-6 py-4 text font-bold rounded-full border-2">
          Вернуться в меню
        </nuxt-link>

      </article>

      <div class="text-center">
        <button
          :disabled="empty || submitting"
          @click.prevent="order"
          class="transition duration-300 ease-in-out hover:text-white uppercase text-gray-700 border-gray-700 hover:bg-gray-700 px-6 py-4 ml-4 text font-bold rounded-full border-2">
          Отправить заказ!
        </button>
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
        submitting: false,
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
        shipping: 'cart/shipping'
      }),

      shippingMethodId: {
        get() {
          return this.total >= 3000 ? 2 : 1;
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
        flash: 'alert/flash'
      }),

      async order() {
        this.submitting = true

        try {
          await this.$axios.$post('orders', {
            ...this.form,
            shipping_method_id: this.shippingMethodId
          })

          await this.getCart()

          this.$router.replace({
            name: 'success'
          })
        } catch (e) {
          this.flash(e.response.data.message);
          this.getCart();
          this.submitting = false;
        }
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
