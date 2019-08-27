<template>
    <div>
        <div class="container-fluid" style="overflow: hidden">
            <MenuCategoryCard v-for="category in kitchen[0].children" :key="category.id" :category="category"></MenuCategoryCard>
        </div>
        <TheFooter></TheFooter>
    </div>
</template>

<script>
    import MenuCategoryCard from "../components/menu/MenuCategoryCard";

    export default {
        components: {
            MenuCategoryCard
        },
        data() {
            return {
                kitchen: []
            }
        },
        methods: {

        },
        mounted() {
            console.log(this.kitchen)
        },
        async asyncData({app}) {
            let response = await app.$axios.get('/menu?scope=kitchen')

            return {
                kitchen: response.data.data
            }
        }
    }
</script>

<style lang="scss">

</style>