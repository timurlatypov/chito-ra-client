<template>
    <div class="the-menu-title">
        <div class="the-menu-title-text"><h1 class="white">Доставка</h1></div>
        <no-ssr>
            <parallax :fixed="true">
                <div class="image-parallax"></div>
            </parallax>
        </no-ssr>
    </div>
</template>

<script>
    import parallax from 'vue-parallaxy'
    export default {
        components: {
            parallax
        }
    }
</script>

<style lang="scss" scoped>
    .the-menu-title {
        position: relative;
    }
    .the-menu-title-text {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }

    .image-parallax {
        position: absolute;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-items: center;
        align-items: center;
        background-image: linear-gradient(
                        to bottom,
                        rgba(0,0,0,0.7) 0%,
                        rgba(0,0,0,0.4) 25%,
                        rgba(0,0,0,0.2) 50%,
                        rgba(0,0,0,0.4) 75%,
                        rgba(0,0,0,0.7) 100%),
        url(../../assets/images/delivery/background.jpg);
        -webkit-filter: contrast(1.1) brightness(1.2);
        filter: contrast(1.1) brightness(1.2);
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center center;
    }


    .the-menu-title::before {
        content: "";
        position: absolute;
        height: 50px;
        width: 200px;
        background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 156 26' style='enable-background:new 0 0 156 26;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%23ffffff;%7d %3c/style%3e%3cpath class='st0' d='M156,26c-1,0-1.9,0-2.9,0h-1.4c-7.6-0.2-24.6-1.3-44.3-6.9C86.3,12.5,78,0,78,0s-8.3,12.5-29.5,19 c-19.7,5.6-36.6,6.8-44.2,7H3H2.9c-1,0-1.9,0-2.9,0C52,26,104,26,156,26z'/%3e%3c/svg%3e") no-repeat bottom;
        display: inline-block;
        transform: translateX(50%) rotate(180deg);
        top: 0;
        right: 50%;
    }

    .the-menu-title::after {
        content: "";
        position: absolute;
        height: 50px;
        width: 200px;
        background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 156 26' style='enable-background:new 0 0 156 26;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%23ffffff;%7d %3c/style%3e%3cpath class='st0' d='M156,26c-1,0-1.9,0-2.9,0h-1.4c-7.6-0.2-24.6-1.3-44.3-6.9C86.3,12.5,78,0,78,0s-8.3,12.5-29.5,19 c-19.7,5.6-36.6,6.8-44.2,7H3H2.9c-1,0-1.9,0-2.9,0C52,26,104,26,156,26z'/%3e%3c/svg%3e") no-repeat bottom;
        display: inline-block;
        transform: translateX(50%);
        bottom: 0;
        right: 50%;
    }

</style>