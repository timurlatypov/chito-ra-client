<template>
    <div>
        <div class="product-thumb" @click.prevent="$modal.show('menu-card', item)">
            <img v-for="image in item.images" :src="`http://api.test/${image.name}`" alt="" :key="image">
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