<template>
    <div class="about-blocks">
        <div class="item-1"></div>
        <div class="item-2">
            <div class="base-layout">
                <div class="centered">
                    <div class="centered__inner">
                        <div class="about-blocks__title">О нас</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-3"></div>
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

    .about-blocks {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: stretch;
        justify-content: center;
        background-color: $bg-color-3;
        margin: -50px 0 -50px 0;
        padding: 0 15px;

        @include media(sm) {
            grid-template-columns: repeat(3, 1fr);
            padding: 0;
        }

        &__title {
            font-family: 'PT Serif', serif;
            font-weight: 700;
            text-align: center;
            color: $color-3;
            font-size: 36px;
            line-height: 110%;
            padding-top: 30px;
        }
    }

    .item-1 {
        display: none;
        width: 100%;
        order: 1;

        @include media(sm) {
            display: block;
        }
    }
    .item-2 {
        position: relative;
        order: 2;
        background-color: white;
        text-align: center;
        border-radius: 25px;

        &::after {
            content: '';
            position: absolute;
            height: 50px;
            width: 200px;
            background: $backgroung-ormanent-white no-repeat bottom;
            transform: translateX(50%);
            top: -50px;
            right: 50%;
        }

        &::before {
            content: '';
            position: absolute;
            height: 50px;
            width: 200px;
            background: $backgroung-ormanent-white no-repeat bottom;
            transform: translateX(50%) rotate(180deg);
            bottom: -50px;
            right: 50%;
        }
    }
    .item-3 {
        display: none;
        width: 100%;
        order: 3;

        @include media(sm) {
            display: block;
        }
    }
</style>