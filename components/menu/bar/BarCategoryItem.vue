<template>
    <div class="bar-box">
        <div class="bar-box__title"><h5>{{ product.name }}</h5></div>
        <div class="bar-box__prices">
            <template v-if="product.variations">
                <BarCategoryItemVariation v-for="(variations, type) in product.variations" :key="type" :type="type" :variations="variations"></BarCategoryItemVariation>
            </template>
        </div>
        <div class="bar-box__description">
            {{ product.description }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                required: true,
                type: Object
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../../assets/styles/variables";
    @import '../../../assets/styles/_media.scss';

    .bar-box {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: flex-end;
        justify-content: center;
        color: $color-3;
        padding-bottom: 20px;

        @include media(sm) {
            padding-bottom: 10px;
            grid-template-columns: repeat(4, 1fr);
        }

        &__title {
            order: 1;
            border-bottom: 1px dotted $beige-light;
            h5 {
                color: $color-3;
                font-family: 'PT Serif', sans-serif;
                font-weight: 600;
                font-style: normal;
            }
            @include media(sm) {
                grid-column: 1 / 4;
                border-bottom: 1px solid $beige-light;
            }
        }
        &__prices {
            order: 3;
            font-family: 'Graphik LCG', sans-serif;
            font-weight: 700;
            font-style: normal;
            padding: 4px 0;
            line-height: 120%;
            @include media(sm) {
                order: 2;
                padding: 10px 0;
                border-bottom: 1px solid $beige-light;
                text-align: right;
            }

        }
        &__description {
            order: 2;
            font-family: 'Graphik LCG', sans-serif;
            color: #70747d;
            font-weight: 400;
            font-style: normal;
            line-height: 120%;
            padding: 4px 0;
            @include media(sm) {
                order: 3;
                padding: 10px 0;
                grid-column: 1 / 5;
            }
        }


        &__price {

        }
        &__volume {
            font-weight: 300;
        }
    }
</style>