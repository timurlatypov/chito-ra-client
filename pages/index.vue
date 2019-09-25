<template>
  <div>
    <TheNavigation />
    <TheHeader />
    <TheReservation />
    <TheAboutHeader />
    <TheGreeting />
    <TheMenuTitle />
    <TheHistory />
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
