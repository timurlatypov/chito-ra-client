<template>
    <div class="contacts-blocks">
        <div class="item-1"></div>
        <div class="item-2">
            <div class="base-layout">
                <div class="centered">
                    <div class="centered__inner">

                        <div class="contacts-blocks__title">Наши адреса</div>
                        <div class="addresses">
                            <div>
                                <h4>«Чито-ра»<br>на Казакова</h4>
                                <div class="spacer"></div>
                                <div class="addresses__subtitle">адрес</div>
                                <div class="addresses__text">Казакова ул., д.10</div>
                                <div class="spacer"></div>
                                <div class="addresses__text">Ежедневно</div>
                                <div class="addresses__text">12:00 - 23:00</div>
                            </div>
                            <div>
                                <h4>«Чито-ра»<br>на Сущевском Валу</h4>
                                <div class="spacer"></div>
                                <div class="addresses__subtitle">адрес</div>
                                <div class="addresses__text">Сущевский вал, д.14б</div>
                                <div class="spacer"></div>
                                <div class="addresses__text">Ежедневно</div>
                                <div class="addresses__text">12:00 - 23:00</div>
                            </div>
                            <div>
                                <h4>«Чито-ра»<br>на Лесной</h4>
                                <div class="spacer"></div>
                                <div class="addresses__subtitle">адрес</div>
                                <div class="addresses__text">Лесная ул., д.30</div>
                                <div class="spacer"></div>
                                <div class="addresses__text">Ежедневно</div>
                                <div class="addresses__text">12:00 - 23:00</div>
                            </div>
                        </div>

                        <div class="phone">
                            <div class="phone__title">+7 (495) 444-74-74</div>
                        </div>
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

    .contacts-blocks {
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
        @include media(md) {
            grid-template-columns: repeat(3, 1fr);
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
        text-align: left;
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

    .addresses {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: stretch;
        text-align: center;
        padding: 50px 50px;

        @include media(sm) {
            grid-template-columns: repeat(3, 1fr);
        }
        @include media(md) {
            grid-template-columns: repeat(3, 1fr);
        }

        &__subtitle {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            font-size: 10px;
            letter-spacing: 0.04rem;
            color: grey;
            text-transform: uppercase;
        }

        &__text {
            font-family: 'PT Serif', serif;
            font-size: 18px;
            font-weight: 700;
        }
    }

    .phone {
        font-family: 'PT Serif', serif;
        font-weight: 700;
        text-align: center;
        color: $color-3;
        padding-bottom: 30px;

        &__title {
            font-size: 36px;
            line-height: 110%;
            padding: 10px 0 20px 0;
        }

        &__number {
            font-size: 26px;
            padding: 10px 0;
        }
    }
</style>