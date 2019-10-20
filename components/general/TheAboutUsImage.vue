<template>
    <section class="about-us-image">
        <div class="about-us-image__background-fixed"></div>
    </section>
</template>

<style lang="scss">
    @import "../../assets/styles/variables";
    @import '../../assets/styles/_media.scss';

    .about-us-image {
        height: 100vh;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            height: 50px;
            width: 200px;
            background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 156 26' style='enable-background:new 0 0 156 26;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%23f5f3f0;%7d %3c/style%3e%3cpath class='st0' d='M156,26c-1,0-1.9,0-2.9,0h-1.4c-7.6-0.2-24.6-1.3-44.3-6.9C86.3,12.5,78,0,78,0s-8.3,12.5-29.5,19 c-19.7,5.6-36.6,6.8-44.2,7H3H2.9c-1,0-1.9,0-2.9,0C52,26,104,26,156,26z'/%3e%3c/svg%3e") no-repeat bottom;
            display: inline-block;
            transform: translateX(50%);
            bottom: -1px;
            right: 50%;
            z-index: 1;
        }

        &:after {
            content: "";
            position: absolute;
            height: 50px;
            width: 200px;
            background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 156 26' style='enable-background:new 0 0 156 26;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%23f5f3f0;%7d %3c/style%3e%3cpath class='st0' d='M156,26c-1,0-1.9,0-2.9,0h-1.4c-7.6-0.2-24.6-1.3-44.3-6.9C86.3,12.5,78,0,78,0s-8.3,12.5-29.5,19 c-19.7,5.6-36.6,6.8-44.2,7H3H2.9c-1,0-1.9,0-2.9,0C52,26,104,26,156,26z'/%3e%3c/svg%3e") no-repeat bottom;
            display: inline-block;
            transform: translateX(50%) rotate(180deg);
            top: -1px;
            right: 50%;
        }

        &__background-fixed {
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                            to bottom,
                            rgba(0,0,0,0.60) 0%,
                            rgba(0,0,0,0.25) 50%,
                            rgba(0,0,0,0.60) 100%), url(../../assets/images/contacts/background.png);
            background-repeat: no-repeat;
            background-size: cover;
            filter: contrast(1.2);

            @include media(lg) {
                background-attachment: fixed;
            }

            &:after {
                content: "Классика и гордость грузинской кухни — хинкали! И мы счастливы быть теми, кто в 2002 году привез культ Хинкальных в Москву!";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate3d(-50%, -50%, 0);
                text-align: center;
                color: white;
                font-size: 1.5rem;
                font-family: 'PT Serif', serif;
                font-weight: 700;
                line-height: 130%;
                width: 80%;

                @include media(sm) {
                    font-size: 1.75rem;
                }
                @include media(md) {
                    font-size: 2rem;
                    width: 70%;
                }

                @include media(xl) {
                    font-size: 2rem;
                }
            }
        }
    }

</style>
