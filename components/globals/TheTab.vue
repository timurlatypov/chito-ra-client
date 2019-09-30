<template>
    <div v-show="active" :slug="slug">
        <template>
            <div class="category-list">
                <div v-for="(item, index) in products" :key="index" class="category-list__item">
                    <TheItemCard :key="item.id" :item="item" />
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import { mapGetters } from "vuex"

    export default {
        props: {
            name: {
                required: true,
                type: String
            },
            slug: {
                required: true,
                type: String
            },
            products : {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                active: false,
                limit: 4,
                button: {
                    show: true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>