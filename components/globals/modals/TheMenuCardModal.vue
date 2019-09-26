<template>
    <TheModal name="menu-card">
        <template slot="body" slot-scope="{ params }">
            <div class="modal-content">
                <p class="image is-16by9">
                    <img :src="`http://apidev.new-chito-ra.site/storage/${params.images[0].name}`" alt="">
                </p>
            </div>
            <div class="inner_title">
                <h6>
                    {{ params.name }}
                    <span class="fp_price">
                        <template v-if="params.variations">
                            <template v-for="variations in params.variations">
                                <div v-for="(variation, index) in variations" :key="index">
                                    <span class="variation-volume">{{ variation.name }} гр /</span> <span class="variation-price">{{ variation.price }}</span>
                                </div>
                            </template>
                        </template>
                    </span>
                </h6>
            </div>
            <div class="description">
                {{ params.description }}
            </div>
        </template>
    </TheModal>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .description {
        color: white;
        font-style: italic;
    }

    .variation-volume {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 16px;
        color: white;
        font-style: italic;
    }
    .variation-price {
        font-family: "IBM Plex Sans", sans-serif;
        font-size: 16px;
        font-weight: bold;
        color: white;
    }

    .inner_title {
        padding: 0;

        h6, h5 {
            font-size: 1.5rem;
            color: white;
            font-family: 'PT Serif', serif;
            font-weight: 700;
            position: relative;
            margin-bottom: 2px;
            padding-top: 0;
            transition: all .3s;
            letter-spacing: 0.04rem;
        }

        h5:before,
        h6:before {
            display: block;
            line-height: 1em;
            font-size: 0.4em;
            letter-spacing: 4px;
            color: #6b6b6b;
            content: "...................................................................................................................................................................................................................................................";
            width: 100%;
            overflow: hidden;
            height: 10px;
            bottom: 0;
            position: absolute;
        }

        .fp_price {
            background: transparent;
            position: absolute;
            right: 0;
            top: 0;
            text-transform: none;
            font-style: normal;
            font-weight: normal;
            padding: 0;
            color: #000;
        }

        & .item-description {
            color: #70747d;
            font-size: .85em;
            font-style: italic;
        }


    }
</style>

