<template>
    <div class="delivery-header">
        <div class="wrapper">
            <div class="delivery-header__title">Доставим быстро!</div>
            <div class="delivery-header__subtitle">+7 (495) 444-74-74</div>
        </div>
    </div>
</template>

<script>
    export default {
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

<style lang="scss" scoped>
    @import "../../assets/styles/variables";
    @import "../../assets/styles/_media.scss";

    .delivery-header {
        position: relative;
        width: 100%;
        height: 300px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        background-color: transparent;
        background: linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.95) 0%,
                        rgba(0,0,0,0.6) 25%,
                        rgba(0,0,0,0) 85%), url('../../assets/images/delivery/background.jpg');
        background-size:cover;
        filter: contrast(1.2);
        color: white;

        &__title {
            font-family: 'PT Serif', serif;
            font-size: 30px;
            font-weight: 700;
            min-width: 320px;

        }

        &__subtitle {
            font-family: 'PT Serif', serif;
            font-size: 20px;
            font-weight: 700;
            min-width: 320px;
        }

        @include media(sm) {
            height: 600px;

            &__title {
                font-size: 46px;
                min-width: 480px;
            }
            &__subtitle {
                font-size: 26px;
                min-width: 480px;
            }
        }



        .wrapper {
             position: absolute;
             text-align: center;
             top: 50%;
             left: 50%;
             transform: translate3d(-50%, -50%, 0);
         }
    }

</style>