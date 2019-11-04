<template>
    <div>
        <TheNavigation />
        <TheDeliveryHeader />
        <TheDeliveryContent :data="deliveryData" />
        <TheFooter className="extra-padding" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                deliveryData: []
            }
        },
        head () {
            return {
                title: `Доставка Чито-ра - Вкуснейшие хинкали с доставкой на дом`,
            }
        },
        async asyncData({app}) {
            let response = await app.$axios.get('/delivery')

            return {
                deliveryData: response.data.data
            }
        }
    }
</script>

<style lang="scss">

</style>