<template>
    <header class="header">
        <no-ssr>
            <div class="header__carousel">
                <agile :navButtons=false :speed=1000 :pauseOnHover=false :autoplay=true :autoplaySpeed=7000 :dots=false :fade=true :infinite=true >
                    <div class="slide">
                        <div class="slide-1 full-height">
                            <div class="slide-text">Вкусно. Сытно.<br>По-домашнему.</div>
                        </div>
                    </div>
                    <div class="slide"><div class="slide-2 full-height">
                        <div class="slide-text">Первая<br>хинкальная Москвы.</div>

                    </div></div>
                    <div class="slide"><div class="slide-3 full-height">
                        <div class="slide-text">Свежие и<br>натуральные продукты.</div>
                    </div></div>
                    <div class="slide"><div class="slide-4 full-height">
                        <div class="slide-text">Мы работаем <br>более 12 лет!</div>
                    </div></div>
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

    .slide-text {
        position: absolute;
        font-family: 'PT Serif', serif;
        font-weight: 700;
        text-align: center;
        top: 50%;
        left: 50%;
        min-width: 310px;
        color: white;
        transform: translate3d(-50%, -50%, 0);
        z-index: 11;

        font-size: 30px;
        line-height: 120%;

        @include media(md) {
            font-size: 40px;
            line-height: 120%;
            min-width: 500px;
        }

        @include media(lg) {
            font-size: 50px;
            line-height: 120%;
            min-width: 700px;
        }
    }

    .header {
        position: relative;
        height: 100vh;

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
            width: 300px;
            height: 60px;
            transform: translateX(50%);
            background: $color-4;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 11;

            &::after {
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

            h4 {
                font-size: 1.2rem;
            }

            @include media(sm) {
                width: 400px;

                h4 {
                    font-size: 1.5rem;
                }
            }
        }




    }

    .slide {
        width: 100%;
    }
    .full-height {
        height: 100vh;
    }
    .slide-1 {
        position: relative;
        background-image: linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.90) 0%,
                        rgba(0,0,0,0.55) 20%,
                        rgba(0,0,0,0.3) 50%,
                        rgba(0,0,0,0.1) 100%), url('../../assets/images/header/background-4.png');
        background-repeat: no-repeat;
        background-size: cover;
        filter: contrast(1.2);
    }
    .slide-2 {
        position: relative;
        filter: contrast(1.1);
        background-image: linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.90) 0%,
                        rgba(0,0,0,0.55) 20%,
                        rgba(0,0,0,0.3) 50%,
                        rgba(0,0,0,0.1) 100%), url('../../assets/images/header/background-2-new.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .slide-3 {
        filter: contrast(1.2);
        background-image: linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.90) 0%,
                        rgba(0,0,0,0.55) 20%,
                        rgba(0,0,0,0.3) 50%,
                        rgba(0,0,0,0.1) 100%), url('../../assets/images/header/background-3.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .slide-4 {
        filter: contrast(1.2);
        background-image: linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.90) 0%,
                        rgba(0,0,0,0.55) 20%,
                        rgba(0,0,0,0.3) 50%,
                        rgba(0,0,0,0.1) 100%), url('../../assets/images/header/background-2.png');
        background-repeat: no-repeat;
        background-size: cover;
    }

</style>