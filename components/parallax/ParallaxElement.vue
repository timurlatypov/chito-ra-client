<template>
    <div class="ParallaxElement">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'ParallaxElement',
        inject: ['parallaxContainer'],
        props: {
            factor: {
                default: 1,
                type: Number,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .ParallaxElement {
        overflow: hidden;
    }
</style>