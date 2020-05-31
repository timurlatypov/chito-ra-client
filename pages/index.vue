<template>
  <div>
    <TheNavigation/>
    <TheHeader/>
    <TheReservationBlock/>
    <TheAboutUsImage/>
    <TheOrderDelivery/>
    <TheContacts/>
    <TheFooter :nowhite="true"/>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: `Чито-ра - Грузинская кухня и вкуснейшие хинкали в Москве`,
      }
    }
  }
</script>
