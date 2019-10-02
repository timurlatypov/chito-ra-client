<template>
    <div class="contacts-header">
        <div class="wrapper">
            <div class="contacts-header__title">Уже едете?</div>
            <div class="contacts-header__subtitle">Мы как раз лепим хинкали для Вас!</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/styles/variables";
    @import "../../assets/styles/_media.scss";

    .contacts-header {
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
                        rgba(0,0,0,0) 85%), url('../../assets/images/contacts/background.png');
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
            height: 700px;

            &__title {
                font-size: 50px;
                line-height: 110%;
            }
            &__subtitle {
                font-size: 30px;
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