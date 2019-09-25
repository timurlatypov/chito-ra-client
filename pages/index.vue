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
              title: `Чито-ра Грузинская кухня`,
              meta: [
                  { hid: 'description', name: 'description', content: 'Page 1 description' }
              ]
          }
      }
  }
</script>
