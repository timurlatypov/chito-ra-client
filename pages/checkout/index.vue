<template>
    <div class="section">
        <TheAlert />
        <div class="container is-fluid">
            <div class="columns">
                <div class="column is-three-quarters">

                    <ShippingAddress
                        :addresses="addresses"
                        v-model="form.address_id"
                    />

                    <article class="message">
                        <div class="message-body">
                            <h1 class="title is-5">Payment</h1>
                        </div>
                    </article>

                    <article class="message">
                        <div class="message-body">
                            <h1 class="title is-5">
                                Shipping
                                {{ shippingMethodId }}
                            </h1>
                            <div class="control">
                                <label class="radio" v-for="method in shipping_methods" :key="method.id">
                                    <input type="radio" name="answer" :value="method.id" v-model="shippingMethodId">
                                    {{ method.name }}
                                </label>
                            </div>
                        </div>
                    </article>

                    <article class="message" v-if="products.length">
                        <div class="message-body">
                            <h1 class="title is-5">
                                Cart summary
                            </h1>
                            <CartOverview>
                                <template slot="rows">
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td class="has-test-weight-bold">Доставка</td>
                                        <td>
                                            {{ shipping.price }}
                                        </td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td class="has-test-weight-bold">Тотал</td>
                                        <td>
                                            {{ total }}
                                        </td>
                                        <td></td>
                                    </tr>
                                </template>
                            </CartOverview>
                        </div>
                    </article>

                    <article class="message">
                        <div class="message-body">
                            <button :disabled="empty" class="button is-info is-fullwidth is-medium">
                                Place order
                            </button>
                        </div>
                    </article>
                </div>
                <div class="column is-one-quarter">
                    <article class="message">
                        <div class="message-body">
                            <button
                                    :disabled="empty || submitting"
                                    class="button is-info is-fullwidth is-medium"
                                    @click.prevent="order"
                            >
                                Place order
                            </button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

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
            shippingMethodId () {
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
                get () {
                    return this.shipping ? this.shipping.id : ''
                },
                set (shippingMethodId) {
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
                        name: 'orders'
                    })
                } catch(e) {
                    this.flash(e.response.data.message);
                    this.getCart();
                    this.submitting = false;
                }
            }
        },
        async asyncData({ app }){
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