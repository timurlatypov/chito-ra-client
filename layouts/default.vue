<template>
  <div>
    <nuxt/>
    <TheMenuCardModal></TheMenuCardModal>
    <LesnayaMapModal></LesnayaMapModal>
    <KazakovaMapModal></KazakovaMapModal>
    <SushevkaMapModal></SushevkaMapModal>
  </div>
</template>

<script>
  import TheMenuCardModal from '@/components/globals/modals/TheMenuCardModal'
  import LesnayaMapModal from '@/components/globals/modals/LesnayaMapModal'
  import KazakovaMapModal from '@/components/globals/modals/KazakovaMapModal'
  import SushevkaMapModal from '@/components/globals/modals/SushevkaMapModal'

  export default {
      components: {
          TheMenuCardModal,
          LesnayaMapModal,
          KazakovaMapModal,
          SushevkaMapModal
      },
  }
</script>