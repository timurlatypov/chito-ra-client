<template>
    <table class="table is-hoverable is-fullwidth">
        <tbody>
            <CartOverviewProduct
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
            />
            <tr>
                <td></td>
                <td></td>
                <td>
                    <p class="has-text-weight-bold">Сумма</p>
                </td>
                <td>{{ subtotal }}</td>
                <td></td>
            </tr>
            <slot name="rows"></slot>
        </tbody>
    </table>
</template>

<script>
    import { mapGetters } from 'vuex'
    import CartOverviewProduct from './CartOverviewProduct'

    export default {
        components: {
            CartOverviewProduct
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters({
                products: 'cart/products',
                subtotal: 'cart/subtotal'
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