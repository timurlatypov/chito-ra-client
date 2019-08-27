<template>
    <div id="sub-header" class="layout-full has-background has-text-shadow">
        <div class="meta-header" style="background-image:url('https://vip-restaurant.vamtam.com/wp-content/uploads/2016/06/photo-coffee-6.jpg' );background-repeat:no-repeat;background-size:cover;background-attachment:scroll;">
            <div class="text-shadow" style="opacity: 0.3;"> </div>
            <div class="limit-wrapper">
                <div class="meta-header-inside">
                    <header class="page-header layout-centered  " data-progressive-animation="page-title">
                        <h1 style="color: rgb(255, 255, 255); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);" itemprop="headline">
                            Contact
                        </h1>
                        <div class="page-header-line" style="opacity: 1; width: 120px; transform: matrix(1, 0, 0, 1, 0, 0);"></div>
                        <div class="desc" style="color: rgb(255, 255, 255); opacity: 1; transform: matrix(1, 0, 0, 1, 0, 0);">Do not hesitate to get in touch at any time.</div>
                    </header>
                </div>
            </div>
        </div>
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

<style lang="scss">
    #sub-header .text-shadow {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #000000;
        opacity: 0.3;
        position: absolute;
        top: 0px;
        left: 0px;
        animation: vamtam-fadein-title 2s ease-in-out;
    }
    .meta-header > .limit-wrapper {
        box-sizing: border-box;
    }

    .limit-wrapper {
        z-index: 555;
        display: block;
        float: none;
        margin: auto;
        max-width: 1260px;
        width: auto;
    }
    .has-background .meta-header-inside {
        display: flex;
        align-items: center;
        height: 50vh;
        max-height: 460px;
    }

    .meta-header .meta-header-inside {
        padding: 50px 20px 40px 20px;
    }
    .limit-wrapper > div {
        position: relative;
    }
    body.sticky-header-type-over #main-content:first-child .page-header {
        padding-top: 60px;
    }

    .page-header.layout-centered {
        text-align: center;
    }
    .page-header.layout-centered, .page-header.layout-left-align, .page-header.layout-right-align {
        flex-direction: column;
    }
    .page-header {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        position: relative;
        width: 100%;
    }
    .meta-header {
        position: relative;
        padding-bottom: 0.035px;
        background-repeat: no-repeat;
        background-position: center top;
        background-attachment: scroll;
        background-size: auto;
        background-color: transparent;
    }

    @media (min-width: 959px) {
        #sub-header {
            position: relative;
            z-index: 2;
        }
        #sub-header .meta-header {
            padding: 0 60px;
        }
    }


</style>