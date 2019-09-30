<template>
    <div class="reserve">
        <div class="item-1">
            <img src="@/assets/images/khinkali.png" alt="">
            <nuxt-link :to="{ name: 'kitchen' }" class="btn btn-primary">Смотреть Меню</nuxt-link>
        </div>
        <div class="item-2">
            <div class="item-2__inner">
                <p class="">Зарезервировать стол легче простого, просто позвоните нам!</p>
                <a href="tel:74994447474"><h3>+7 (499) 444-74-74</h3></a>
                <TheButton className="btn-primary">Позвонить</TheButton>
            </div>
        </div>
        <div class="item-3">
            <img src="@/assets/images/wine.png" alt="">
            <nuxt-link :to="{ name: 'bar' }" class="btn btn-primary">Смотреть Бар</nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/styles/variables";
    @import '../../assets/styles/_media.scss';

    .reserve {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: center;
        justify-items: center;
        position: relative;
        background-color: #f5f3f0;
        min-height: 450px;
        width: 100%;

        @include media(lg) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .reserve:after {
        content: "";
        position: absolute;
        height: 50px;
        width: 200px;
        background: $backgroung-ormanent-white no-repeat bottom;
        transform: translateX(50%);
        bottom: 0;
        right: 50%;
    }

    .item-1 {
        padding: 80px 0 70px 0;
        text-align: center;
        order: 2;
        img {
            width: 200px;
            padding-bottom: 10px;
        }

        @include media(lg) {
            order: 1;
            padding: 0;

            img {
                width: 240px;
            }
        }
    }
    .item-2 {
        order: 1;
        height: 100%;
        position: relative;
        text-align: center;
        align-self: self-start;

        @include media(lg) {
            order: 2;
            height: 300px;
            position: relative;
            text-align: center;
        }

        &__inner {
            position: relative;
            text-align: center;
            background-color: white;
            width: 300px;
            margin: 0 auto;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 25px;

            @include media(sm) {
                width: 400px;
            }

            p {
                margin: 10px 0;
                line-height: 110%;
            }

            h3 {
                margin: 10px 0 10px 0;
                font-size: 1.5rem;

                @include media(sm) {
                    font-size: 2rem;
                    margin: 20px 0 30px 0;
                }
            }
        }

        &__inner:after {
            content: "";
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
        padding: 10px 0 70px 0;
        text-align: center;
        order: 3;
        img {
            width: 150px;
            padding-bottom: 10px;
        }

        @include media(lg) {
            order: 3;

            img {
                width: 180px;
            }
        }
    }
</style>