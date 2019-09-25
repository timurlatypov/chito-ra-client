<template>
    <div class="contacts">
        <div class="contacts__wrapper">
            <div class="contacts__item--1">
                <div class="contacts__anchor active">«Чито-ра» на Казакова</div>
                <div class="contacts__anchor">«Чито-ра» на Лесной</div>
                <div class="contacts__anchor">«Чито-ра» на Сущевском Валу</div>
            </div>
            <div class="contacts__item--2">
                <div class="contacts__item__block">
                    <div class="img-wrapper">
                        <img src="@/assets/images/svg/map-icon.svg" alt="">
                    </div>
                    <h4 class="white">Как найти</h4>
                    <div class="content-text">
                        Москва, ул. Казакова, д. 10
                    </div>
                    <TheButton>Показать на карте</TheButton>
                </div>
                <div class="contacts__item--2__bottom-ornament"></div>
            </div>
            <div class="contacts__item--3"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../assets/styles/_media.scss';
    @import '../../assets/styles/variables';

    .contacts {
        background-color: white;
        background-image: url(../../assets/images/contacts/contacts-background-view.png);
        background-position: bottom;
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 900px;

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
</style>