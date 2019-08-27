<template>
    <div class="menu-title">
        <h6>
            {{ product.name }}
            <span class="icon is-small is-cursor-pointer" @click.prevent="$modal.show('menu-card', product)">
                <i class="fas fa-search-plus fa-sm" aria-hidden="true"></i>
            </span>
            <span class="fp_price">
                <template v-if="product.variations">
                    <MenuCategoryItemVariation v-for="(variations, type) in product.variations" :key="type" :type="type" :variations="variations"></MenuCategoryItemVariation>
                </template>
            </span>
        </h6>
        <p class="item-description">{{ product.description }}</p>
    </div>
</template>

<script>
    import MenuCategoryItemVariation from '@/components/menu/MenuCategoryItemVariation'
    export default {
        components: {
            MenuCategoryItemVariation
        },
        props: {
            product: {
                required: true,
                type: Object
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    .is-cursor-pointer {
        cursor: pointer;
    }
</style>