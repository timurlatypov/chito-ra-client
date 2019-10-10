<template>
    <div style="height: 100%;" class="ParallaxImage">
        <client-only>
            <parallax fixed=true sectionHeight=70>
                <img src="@/assets/images/contacts/background.png" alt="very cool bg">
                <slot/>
            </parallax>
        </client-only>
    </div>
</template>

<script>
    import Parallax from 'vue-parallaxy'

    export default {
        components: {
            Parallax
        },
    };
</script>

<style lang="scss">
    .ParallaxImage__aspect-ratio-wrap {
        position: relative;
        top: -100%;
        height: 0;
        overflow: hidden;
    }

    .ParallaxImage__aspect-ratio-inside {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>