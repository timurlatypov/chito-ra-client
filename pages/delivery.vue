<template>
    <div>
        <TheNavigation />
        <TheDeliveryHeader />
        <TheDeliveryContent :data="deliveryData" />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                deliveryData: []
            }
        },
        async asyncData({app}) {
            let response = await app.$axios.get('/kitchen')

            return {
                deliveryData: response.data.data
            }
        }
    }
</script>

<style lang="scss">

</style>