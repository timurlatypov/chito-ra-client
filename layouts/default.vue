<template>
  <div>
    <TheNavigation />
    <nuxt/>
    <TheMenuCardModal></TheMenuCardModal>
  </div>
</template>

<script>
  import TheMenuCardModal from '@/components/globals/modals/TheMenuCardModal'
  export default {
      components: {
          TheMenuCardModal,
      },
  }
</script>