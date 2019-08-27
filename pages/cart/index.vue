<template>
    <div class="section">
        <div class="container">
            <div class="columns is-centered">
                <div class="column is-three-quarters">
                    <h1 class="title is-4">Your cart</h1>
                    {{ changed }}
                    <article v-if="products.length" class="message">
                        <CartOverview />
                    </article>
                    <article v-else>
                        Your cart is empty
                    </article>

                    <nuxt-link :to="{ name: 'checkout' }" v-if="!empty" class="button is-fullwidth is-info is-medium">
                        Checkout
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapGetters } from 'vuex'
    import CartOverview from '@/components/cart/CartOverview'

    export default {
        components: {
            CartOverview
        },
        middleware: [
            'redirectIfGuest'
        ],
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                empty: 'cart/empty',
                products: 'cart/products',
                changed: 'cart/changed'
            })
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="scss">

</style>