<template>
  <div>
    <TheNavigation />
    <TheHeader />
    <TheReservation />
    <TheGreeting />
    <TheMenuTitle />
    <TheHistory />
    <TheMenuTitle />
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
      }
  }
</script>
