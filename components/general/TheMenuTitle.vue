<template>
    <div class="the-menu-title">
        <div class="the-menu-title-text"><h1 class="white">Наше меню</h1></div>
        <parallax :fixed="true">
            <div class="image-parallax">
            </div>
        </parallax>
    </div>
</template>

<script>
    import parallax from 'vue-parallaxy'

    export default {
        components: {
            parallax
        },
        data() {
            return {}
        },
        methods: {},
        mounted() {

        }
    }
</script>

<style lang="scss">
    @import 'TheMenuTitle';
</style>