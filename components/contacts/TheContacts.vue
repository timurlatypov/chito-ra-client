<template>
    <div class="contacts">
        <div class="centered__inner">
            <div class="phone">
                <div class="phone__title">Адреса</div>
            </div>
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../assets/styles/_media.scss';
    @import '../../assets/styles/variables';

    .contacts {
        background-color: white;
        background-image: url(../../assets/images/contacts/contacts-background-view.png);
        background-position: center bottom;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        min-height: 800px;

        &__anchor {
            position: relative;
            font-size: 1.5rem;
            font-family: 'PT Serif', serif;
            font-weight: 700;
            color: $blue;
            padding-bottom: 10px;

            &:hover,
            &.active {
                color: $orange;
                text-decoration: underline;
            }
        }

        #{&}__wrapper {
            position: relative;
            min-height: 450px;
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            grid-column-gap: 0;
            grid-row-gap: 0;
            align-items: center;
            justify-items: center;

            @include media(sm) {
                grid-template-columns: repeat(1, 1fr);
            }
            @include media(md) {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        #{&}__item--1 {
            padding-left: 80px;
            text-align: left;
            order: 1;

            @include media(sm) {
                padding-left: 80px;
                text-align: left;
                order: 1;
            }

        }
        #{&}__item--2 {
            order: 0;
            max-width: 450px;
            width: 80%;
            height: 500px;
            position: relative;

            @include media(sm) {
                order: 0;
                max-width: 450px;
                width: 80%;
                height: 500px;
                position: relative;
            }
        }

        #{&}__item--3 {
            text-align: center;
            order: 2;

            @include media(sm) {
                text-align: center;
                order: 2;
            }
        }

        #{&}__item__block {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
            text-align: center;
            background-color: $blue;
            width: 100%;
            height: 300px;
            border-radius: 20px;

            &:before {
                content: "";
                position: absolute;
                height: 50px;
                width: 200px;
                background: $backgroung-ormanent-blue no-repeat bottom;
                transform: translateX(50%);
                top: -50px;
                right: 50%;
            }

            &:after {
                content: "";
                position: absolute;
                height: 50px;
                width: 200px;
                background: $backgroung-ormanent-blue no-repeat bottom;
                transform: translateX(50%) rotate(180deg);
                bottom: -50px;
                right: 50%;
            }

            & .img-wrapper {
                margin-top: 25px;
            }

            & img {
                width: 60px;
            }

            & .content-text {
                color: white;
                font-size: 16px;
                margin-bottom: 30px;
            }
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
            color: $color-3;
        }
    }

    .phone {
        font-family: 'PT Serif', serif;
        font-weight: 700;
        text-align: center;
        color: $color-3;
        padding-top: 30px;

        &__title {
            font-size: 36px;
            line-height: 110%;
            padding: 15px 0 0 0;
        }

        &__number {
            font-size: 26px;
            padding: 10px 0;
        }
    }
</style>