<template>
    <div>
        <div class="menu-preview">
            <div class="menu-preview-item-1">
                <div class="item-1__anchor active">«Чито-ра» на Казакова</div>
                <div class="item-1__anchor">«Чито-ра» на Лесной</div>
                <div class="item-1__anchor">«Чито-ра» на Сущевском Валу</div>
            </div>
            <div class="menu-preview-item-2">
                <img class="masked-element" src="/images/phali.png" width="350px" alt="">
            </div>
            <div class="menu-preview-item-3">3</div>
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

<style lang="scss" scoped>
    @import "../../assets/styles/variables";
    @import '../../assets/styles/_media.scss';

    .menu-preview {
        position: relative;
        background-color: #f5f3f0;
        min-height: 450px;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .menu-preview-item-1 {
        order: 1;
        padding: 30px;
    }
    .menu-preview-item-2 {
        order: 0;
        height: 100%;
        padding: 50px 0;
    }
    .menu-preview-item-3 {
        order: 2;
        padding: 30px;
        text-align: left;
    }

    .menu-preview-image-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .menu-preview-image {
        position: absolute;
        width: 200px;
        height: 200px;
        bottom: 50%;
        right: 50%;
        transform: translate3d(50%, 50%, 0);
    }

    .masked-element {
        mask-mode: alpha;
        mask-image: url(../../assets/images/svg/ornament.svg);
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-position: center center;
    }

    @include media(sm) {
        .menu-preview {
            flex-direction: row;
            justify-content: space-around;
        }
        .menu-preview-item-1 {
            order: 0;
            width: 30vw;
        }
        .menu-preview-item-2 {
            order: 1;
            width: 30vw;
        }
        .menu-preview-item-3 {
            order: 2;
            width: 30vw;
        }
    }
</style>