<template>
    <div class="ParallaxContainer">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'ParallaxContainer',
        provide() {
            return {
                parallaxContainer: this.data,
            };
        },
        data() {
            return {
                data: {
                    height: 0,
                    scrollFactor: 0,
                    width: 0,
                },
            };
        },
        mounted() {
            this.calcParallax();

            // We're using a `requestAnimationFrame()`
            // for optimal performance.
            const eventHandler = () => requestAnimationFrame(this.calcParallax);
            window.addEventListener('resize', eventHandler);
            window.addEventListener('scroll', eventHandler);
            // Remove the scroll hanlder when the
            // component is destroyed.
            this.$on(`hook:destroyed`, () => {
                window.removeEventListener('resize', eventHandler);
                window.removeEventListener('scroll', eventHandler);
            });
        },
        methods: {
            calcParallax() {
                const containerRect = this.$el.getBoundingClientRect();

                this.data.height = containerRect.height;
                this.data.width = containerRect.width;

                const viewportOffsetTop = containerRect.top;
                const viewportOffsetBottom = window.innerHeight - viewportOffsetTop;

                this.data.scrollFactor = viewportOffsetBottom / (window.innerHeight + this.data.height);
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variables";
    @import "../../assets/styles/_media.scss";

    .ParallaxContainer {
        overflow: hidden;
        position: relative;

        &:before {
            content: "";
            position: absolute;
            height: 50px;
            width: 200px;
            background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 156 26' style='enable-background:new 0 0 156 26;' xml:space='preserve'%3e%3cstyle type='text/css'%3e .st0%7bfill:%23ffffff;%7d %3c/style%3e%3cpath class='st0' d='M156,26c-1,0-1.9,0-2.9,0h-1.4c-7.6-0.2-24.6-1.3-44.3-6.9C86.3,12.5,78,0,78,0s-8.3,12.5-29.5,19 c-19.7,5.6-36.6,6.8-44.2,7H3H2.9c-1,0-1.9,0-2.9,0C52,26,104,26,156,26z'/%3e%3c/svg%3e") no-repeat bottom;
            display: inline-block;
            transform: translateX(50%);
            bottom: 0;
            right: 50%;
            z-index: 1;
        }

        &:after {
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
    }


</style>