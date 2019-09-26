<template>
    <div>
        <TheNavigation />
        <div class="container-fluid" style="overflow: hidden">
            <div class="row">
                <div class="bar-page">

                    <div class="bar-page__left">
                        <div class="bar-page__background">
                            <no-ssr>
                                    <agile navButtons="false" speed="1000" pauseOnHover="false" autoplay="true" autoplaySpeed="15000" dots="false" fade="true" infinite="true">
                                        <div class="slide">
                                            <div class="slide-1 full-height">
                                                <div class="slide-text"></div>
                                            </div>
                                        </div>
                                        <div class="slide"><div class="slide-2 full-height">
                                            <div class="slide-text"></div>
                                        </div></div>
                                    </agile>
                            </no-ssr>
                        </div>
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
    .slide {
        width: 100%;
    }
    .full-height {
        height: 100vh;
    }
    .slide-1 {
        position: relative;
        filter: contrast(1.1);
        background-image: url('../assets/images/bar/background-1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left top;
    }
    .slide-2 {
        position: relative;
        filter: contrast(1.1);
        background-image: url('../assets/images/bar/background-2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: left bottom;
    }

    .slide-text {
        position: absolute;
        font-family: 'PT Serif', serif;
        font-weight: 700;
        line-height: 120%;
        text-align: center;
        top: 50%;
        left: 50%;
        color: white;
        font-size: 50px;
        transform: translate3d(-50%, -50%, 0);
        z-index: 11;
    }

    .bar-page {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;

        &__left {
            position: relative;
        }

        &__background {
            position: fixed;
            z-index: -1;
            width: 50%;
            height: 100vh;
            top: 0;
            left: 0;
            background-color: #f5f3f0;
            background-position: left center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        &__right {
            background-color: #f5f3f0;
        }

    }
</style>