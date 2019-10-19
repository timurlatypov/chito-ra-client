<template>
        <div class="wrapper">
            <div class="cr-blank-space" style="height:80px"></div>
            <div class="sep-text">
                <h3 class="has-text-centered">
                    {{ category.name }}
                </h3>
            </div>
            <template v-if="category.products">
                <BarCategoryItem v-for="(product, index) in category.products" :key="index" :product="product"></BarCategoryItem>
            </template>
        </div>
</template>

<script>
    export default {
        props: {
          category: {
              required: true,
              type: Object
          }
        }
    }
</script>

<style lang="scss">
    @import "../../../assets/styles/variables";
    @import "../../../assets/styles/_media.scss";

    .wrapper {
        padding: 0 20px;

        @include media(lg) {
            padding: 0 40px;
        }
    }
</style>