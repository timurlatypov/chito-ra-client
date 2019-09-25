<template>
    <div class="reserve">
        <div class="item-1">
            <img src="@/assets/images/khinkali.png" alt="">
            <h4>Кухня</h4>
        </div>
        <div class="item-2">
            <div class="item-2__inner">
                <p class="">Зарезервировать стол легче простого, просто позвоните нам!</p>
                <h3>+7 (499) 444-74-74</h3>
                <TheButton className="btn-primary">Позвонить</TheButton>
            </div>
        </div>
        <div class="item-3">
            <img src="@/assets/images/grills.png" alt="">
            <h4>Бар</h4>
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

        @include media(sm) {
            grid-template-columns: repeat(1, 1fr);
        }
        @include media(md) {
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
        text-align: center;
        order: 1;
        img {
            width: 220px;
        }
    }
    .item-2 {
        order: 2;
        height: 500px;
        position: relative;
        text-align: center;

        &__inner {
            position: relative;
            text-align: center;
            background-color: white;
            width: 450px;
            height: 300px;
            margin: 0 auto;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            padding: 25px;

            p {
                margin: 10px 0;
            }

            h3 {
                margin: 20px 0 30px 0;
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
        order: 3;
        text-align: center;
        img {
            width: 220px;
        }
    }
</style>