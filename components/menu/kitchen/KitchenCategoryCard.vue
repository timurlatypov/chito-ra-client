<template>
    <div class="row">
        <div class="menu-page">
            <div class="menu-page__left"
                 v-for="(image, index) in category.image"
                 :key="index"
                 :style="`
                    background-color: #f5f3f0;
                    background-image: url(http://apidev.new-chito-ra.site/storage/${image.name});
                    background-position: left center;
                    background-repeat: no-repeat;
                    background-size: calc(100vw/2);
                    background-attachment: fixed;`">
            </div>

            <div class="menu-page__right">
                <div class="wrapper">
                    <div style="height:130px"></div>
                    <h3 class="has-text-centered">
                        {{ category.name }}
                    </h3>
                    <template v-if="category.products">
                        <KitchenCategoryItem v-for="(product, index) in category.products" :key="index" :product="product"></KitchenCategoryItem>
                    </template>
                </div>
            </div>
        </div>
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

    .menu-page {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;

        @include media(lg) {
            grid-template-columns: repeat(2, 1fr);
        }

        &__left {
            display: none;
            position: relative;
            min-height: 800px;
            border-bottom: 5px solid #f5f5f0;

            @include media(lg) {
                display: block;
            }
        }

        &__right {
            min-height: 1000px;
            background-color: #f5f3f0;
        }
    }

    .wrapper {
        padding: 0 20px;

        @include media(lg) {
            padding: 0 40px;
        }
    }


</style>