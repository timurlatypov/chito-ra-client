<template>
    <div class="row">
        <div class="menu-page">
            <div class="menu-page__left"
                 v-for="(image, index) in category.image"
                 :key="index"
                 :style="`
                    background-color: #f5f3f0;
                    background-image: linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0) 100%), url(http://apidev.new-chito-ra.site/storage/${image.name});
                    background-position: left center;
                    background-repeat: no-repeat;
                    background-size: calc(100vw/2);
                    background-attachment: fixed;`">
            </div>

            <div class="menu-page__right">
                <div class="wrapper">
                    <div class="cr-blank-space" style="height:130px"></div>
                    <!--<div class="row">-->
                        <!--<div class="has-text-centered">-->
                            <!--<img src="http://apidev.new-chito-ra.site/storage/sketches/cold-snacks.png" width="200px">-->
                        <!--</div>-->
                    <!--</div>-->
                    <div class="sep-text">
                        <h3 class="has-text-centered">
                            {{ category.name }}
                        </h3>
                    </div>
                    <template v-if="category.products">
                        <KitchenCategoryItem v-for="(product, index) in category.products" :key="index" :product="product"></KitchenCategoryItem>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
          category: {
              required: true,
              type: Object
          }
        }
    }
</script>

<style lang="scss">
    .menu-page {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;


        &__left {
            min-height: 1000px;
            border-bottom: 5px solid #f5f5f0;
        }
        &__right {
            min-height: 1000px;
            background-color: #f5f3f0;
        }
    }

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