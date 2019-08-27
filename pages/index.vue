<template>
  <div>
    <TheHeader></TheHeader>
    <TheReservation></TheReservation>
    <TheGreeting></TheGreeting>
    <TheMenuTitle></TheMenuTitle>
    <TheMenuPreview></TheMenuPreview>
    <TheHistory></TheHistory>
    <TheContacts></TheContacts>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
  import TheReservation from '../components/reservation/TheReservation'
  import TheGreeting from '../components/general/TheGreeting'
  import TheMenuTitle from '../components/general/TheMenuTitle'
  import TheMenuPreview from '../components/menu/TheMenuPreview'
  import TheHistory from '../components/general/TheHistory'
  import TheContacts from '../components/contacts/TheContacts'

  export default {
      head () {
          return {
              title: `Чито-ра Грузинская кухня`,
              meta: [
                  { hid: 'description', name: 'description', content: 'Page 1 description' }
              ]
          }
      },
      components: {
          TheReservation,
          TheGreeting,
          TheMenuTitle,
          TheMenuPreview,
          TheHistory,
          TheContacts
      },

      data() {
          return {}
      },
      methods: {

      },
      mounted() {

      }
  }
</script>
