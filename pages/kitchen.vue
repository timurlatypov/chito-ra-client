<template>
    <div>
        <TheNavigation />
        <div class="container-fluid" style="overflow: hidden">
            <KitchenCategoryCard v-for="category in kitchen[0].children" :key="category.id" :category="category" />
        </div>
        <TheFooter />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                kitchen: []
            }
        },
        async asyncData({app}) {
            let response = await app.$axios.get('/kitchen')

            return {
                kitchen: response.data.data
            }
        }
    }
</script>

<style lang="scss">

</style>