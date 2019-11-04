<template>
    <div class="ParallaxElement">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'ParallaxElement',
        inject: ['parallaxContainer'],
    };
</script>

<style lang="scss" scoped>
    .ParallaxElement {
        overflow: hidden;
    }
</style>