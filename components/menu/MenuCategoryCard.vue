<template>
    <div class="row">
        <div class="columns is-desktop">
            <div class="column menu-page__left"
                 v-for="image in category.image"
                 :key="image.name"
                 :style="`
                    background-image: url(http://api.test/${image.name});
                    background-position: left center;
                    background-repeat: no-repeat;
                    background-size: auto;
                    background-attachment: fixed;`">
            </div>

            <div class="column menu-page__right">
                <div class="cr-blank-space" style="height:130px"></div>
                <div class="row">
                    <div class="has-text-centered">
                        <img src="http://api.test/sketches/cold-snacks.png" width="200px">
                    </div>
                </div>

                <div class="sep-text">
                    <h3 class="has-text-centered">
                        {{ category.name }}
                    </h3>
                </div>

                <template v-if="category.products">
                    <MenuCategoryItem v-for="(product, index) in category.products" :key="index" :product="product"></MenuCategoryItem>
                </template>

            </div>
        </div>
    </div>
</template>

<script>
    import MenuCategoryItem from "@/components/menu/MenuCategoryItem";

    export default {
        components: {
            MenuCategoryItem
        },
        props: {
          category: {
              required: true,
              type: Object
          }
        },
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="scss">

</style>