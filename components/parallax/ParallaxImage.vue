<template>
    <div style="height: 100%;" class="ParallaxImage">
        <client-only>
            <parallax fixed=true sectionHeight=70>
                <div class="has-background-image"></div>
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
    .has-background-image {
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
    }

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
    .filter-image {

    }
</style>