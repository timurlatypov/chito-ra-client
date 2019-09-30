<template>
  <div>
    <TheNavigation />
    <TheHeader />
    <TheReservationBlock />
    <TheAboutUs />
    <TheAboutUsImage />
    <TheHistory />
    <TheDeliveryImage />
    <TheDeliveryPreview  :data="deliveryData" />
    <TheContactsImage />
    <TheContacts />
    <TheFooter />
  </div>
</template>

<script>
  export default {
      head () {
          return {
              title: `Чито-ра - Грузинская кухня и вкуснейшие хинкали`,
              meta: [
                  { hid: 'description', name: 'description', content: '' }
              ]
          }
      },
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
