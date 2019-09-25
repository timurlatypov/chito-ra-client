<template>
    <div>
        <TheNavigation />
        <div class="container-fluid" style="overflow: hidden">
            <div class="row">
                <div class="bar-page">
                    <div class="bar-page__left">
                        <div class="bar-page__background"></div>
                    </div>
                    <div class="bar-page__right">
                        <BarCategoryCard v-for="category in bar[0].children" :key="category.id" :category="category" />
                    </div>
                </div>
            </div>
        </div>
        <TheFooter />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bar: []
            }
        },
        methods: {

        },
        mounted() {

        },
        async asyncData({app}) {
            let response = await app.$axios.get('/bar')

            return {
                bar: response.data.data
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bar-page {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;

        &__left {
            position: relative;
        }

        &__background {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background-color: #f5f3f0;
            background-image: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0) 100%), url(http://apidev.new-chito-ra.site/category/bar-1.jpg);
            background-position: left center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        &__right {
            background-color: #f5f3f0;
        }

    }
</style>