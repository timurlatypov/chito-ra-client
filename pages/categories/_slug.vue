<template>
    <div class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-3" v-for="product in products" :key="product.slug">
                    {{ products }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        async asyncData({params, app}) {
            let response = await app.$axios.$get(`products?category=${params.slug}`)

            return {
                products: response.data
            }
        },
        data() {
            return {
                products: []
            }
        },
    }
</script>

<style lang="scss">

</style>