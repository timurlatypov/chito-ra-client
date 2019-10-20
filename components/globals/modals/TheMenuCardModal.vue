<template>
    <TheModal name="menu-card">
        <template slot="body" slot-scope="{ params }">
            <div class="modal-content">
                <p class="image is-16by9">
                    <img oncontextmenu="return false;" :src="`http://apidev.new-chito-ra.site/storage/${params.images[0].name}`" alt="">
                </p>
            </div>
            <div class="modal-box">
                <div class="modal-box__title"><h4>{{ params.name }}</h4></div>
                <div class="modal-box__prices">
                    <template v-if="params.variations">
                        <template v-for="variations in params.variations">
                            <div v-for="(variation, index) in variations" :key="index">
                                <span class="modal-box__price">{{ variation.price }}</span> <span class="modal-box__volume">({{ variation.name }} гр)</span>
                            </div>
                        </template>
                    </template>
                </div>
                <div class="modal-box__description">
                    {{ params.description }}
                </div>
            </div>
        </template>
    </TheModal>
</template>

<style lang="scss">
    @import "../../../assets/styles/variables";
    @import '../../../assets/styles/_media.scss';

    .modal-box {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: flex-end;
        justify-content: center;
        color: #fff;

        @include media(sm) {
            grid-template-columns: repeat(4, 1fr);
        }

        &__title {
            order: 1;
            border-bottom: 1px dotted white;
            h4 {
                color: white
            }
            @include media(sm) {
                grid-column: 1 / 4;
                border-bottom: 1px solid white;
            }
        }
        &__prices {
            order: 3;
            font-family: 'Graphik LCG', sans-serif;
            font-weight: 700;
            font-style: normal;
            padding: 10px 0;
            line-height: 120%;
            @include media(sm) {
                order: 2;
                border-bottom: 1px solid white;
                text-align: right;
            }

        }
        &__description {
            order: 2;
            font-family: 'Graphik LCG', sans-serif;
            color: $beige-light;
            font-weight: 400;
            font-style: normal;
            padding: 10px 0;
            line-height: 120%;
            @include media(sm) {
                order: 3;
                grid-column: 1 / 4;
            }
        }



        &__price {
            font-weight: 400;
            @include media(sm) {
                font-weight: 700;
            }
        }
        &__volume {
            font-weight: 400;
        }
    }
</style>

