<template>
        <div class="wrapper">
            <div class="cr-blank-space" style="height:130px"></div>
            <div class="sep-text">
                <h3 class="has-text-centered">
                    {{ category.name }}
                </h3>
            </div>

            <template v-if="category.products">
                <BarCategoryItem v-for="(product, index) in category.products" :key="index" :product="product"></BarCategoryItem>
            </template>
        </div>
</template>

<script>
    export default {
        props: {
          category: {
              required: true,
              type: Object
          }
        },
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

<style lang="scss">

    .wrapper {
        padding: 0 40px;
    }

    .menu-title {
        padding: 10px 0 20px 0;

        h6, h5 {
            position: relative;
            margin-bottom: 2px;
            padding-top: 0;
            transition: all .3s;
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            letter-spacing: 0.04rem;
            text-transform: uppercase;
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

    .sep-text {
        position: relative;
        text-align: center;
    }

    .sep-text.centered .sep-text-before, .sep-text.centered .sep-text-after {
        width: 50%;
        font-size: 10px;
    }

    .sep-text .sep-text-before, .sep-text .sep-text-after {
        display: table-cell;
        width: 100%;
        vertical-align: middle;
        text-align: right;
    }

    .sep-text .sep-text-line {
        display: inline-block;
        width: 30%;
        border-top: 0 solid;
        border-bottom: 1px solid;
        color: #EDEDED;
        vertical-align: baseline;
    }

    .sep-text .content {
        padding-right: .7em;
        padding-left: .7em;
    }

    .sep-text .content, .sep-text .sep-text-more {
        display: table-cell;
        vertical-align: middle;
        white-space: nowrap;
    }

    .sep-text .text-divider-subtitle {
        color: #cb7152;
        font-size: 1em;
        letter-spacing: 0.3em;
        padding-top: 10px;
    }

    .sep-text .text-divider-subtitle:before, .sep-text .text-divider-subtitle:after {
        display: inline-block;
        width: auto;
        height: 15px;
        content: "~";
        font-size: 1.2em;
        padding: 0px 5px;
    }

    .sep-text .text-divider-subtitle:before, .sep-text .text-divider-subtitle:after {
        display: inline-block;
        width: auto;
        height: 15px;
        content: "~";
        font-size: 1.2em;
        padding: 0px 5px;
    }

    .sep-text.centered .sep-text-before, .sep-text.centered .sep-text-after {
        width: 50%;
        font-size: 10px;
    }

    .sep-text .sep-text-after {
        text-align: left;
    }

    .sep-text .sep-text-line {
        display: inline-block;
        width: 30%;
        border-top: 0 solid;
        border-bottom: 1px solid;
        color: #EDEDED;
        vertical-align: baseline;
    }
</style>