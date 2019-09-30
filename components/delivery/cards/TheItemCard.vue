<template>
    <div>
        <div class="product-thumb" @click.prevent="$modal.show('menu-card', item)">
            <img v-for="(image, index) in item.images" :src="`http://apidev.new-chito-ra.site/storage/${image.name}`" alt="" :key="index">
        </div>
        <div class="product-text">
            <div class="product-text__title">{{ item.name }}</div>
            <template v-if="item.variations">
                <TheItemCardVariations v-for="(variations, type) in item.variations" :key="type" :type="type" :variations="variations" />
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            item: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="scss">
    h4 {
        line-height: 110%;
    }
</style>