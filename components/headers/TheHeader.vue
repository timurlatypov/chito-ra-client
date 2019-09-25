<template>
    <header class="header">
        <div class="header__filter"></div>
        <no-ssr>
            <div class="header__carousel">
                <agile navButtons="false" speed="1000" pauseOnHover="false" autoplay="true" autoplaySpeed="7000" dots="false" fade="true" infinite="true">
                    <div class="slide"><div class="slide-1 full-height"></div></div>
                    <div class="slide"><div class="slide-2 full-height"></div></div>
                    <div class="slide"><div class="slide-3 full-height"></div></div>
                    <div class="slide"><div class="slide-4 full-height"></div></div>
                </agile>
            </div>
        </no-ssr>
        <div class="header__reserve">
            <h4 class="white">Забронировать стол</h4>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../assets/styles/variables';
    @import '../../assets/styles/media';

    .header {
        position: relative;
        height: 100vh;

        &__filter {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                            to bottom,
                            rgba(0,0,0,0.99) 0%,
                            rgba(0,0,0,0.65) 20%,
                            rgba(0,0,0,0.3) 30%,
                            rgba(0,0,0,0.1) 100%);
            -webkit-background-size: cover;
            background-size: cover;
            background-position: top 0;
            z-index: 10;
        }

        &__carousel {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        &__reserve {
            position: absolute;
            text-align: center;
            color: white;
            bottom: 0;
            right:  50%;
            width: 450px;
            height: 60px;
            transform: translateX(50%);
            background: #b2db1a;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 11;
        }

        &__reserve::after {
            content: "";
            position: absolute;
            height: 50px;
            width: 200px;
            background: $backgroung-ormanent no-repeat bottom;
            display: inline-block;
            transform: translateX(50%);
            top: -50px;
            right: 50%;
        }
    }

    .slide {
        width: 100%;
    }
    .full-height {
        height: 100vh;
    }
    .slide-1 {
        filter: contrast(1.2);
        background-image: url('../../assets/images/header/background-4.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .slide-2 {
        filter: contrast(1.2);
        background-image: url('../../assets/images/header/background-2.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .slide-3 {
        filter: contrast(1.2);
        background-image: url('../../assets/images/header/background-3.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .slide-4 {
        filter: contrast(1.2);
        background-image: url('../../assets/images/header/background-1.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>