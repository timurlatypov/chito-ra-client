<template>
    <div class="menu-title">
        <h6>
            {{ product.name }}
            <span class="fp_price">
                <template v-if="product.variations">
                    <BarCategoryItemVariation v-for="(variations, type) in product.variations" :key="type" :type="type" :variations="variations"></BarCategoryItemVariation>
                </template>
            </span>
        </h6>
        <p class="item-description">{{ product.description }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    .is-cursor-pointer {
        cursor: pointer;
    }
</style>