<template>
    <div class="parallax-preview-text">
        <slot />
    </div>
</template>

<style lang="scss" scoped>
    @import "../../assets/styles/variables";
    @import "../../assets/styles/_media.scss";


    .parallax-preview-text {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 2rem;
        color: white;
        font-family: 'PT Serif', serif;
        font-weight: 700;
        text-align: center;
        line-height: 120%;
        transform: translate3d(-50%, -50%, 0);

        @include media(sm) {
            font-size: 2.5rem;
        }
        @include media(md) {
            font-size: 3rem;
        }

    }
</style>