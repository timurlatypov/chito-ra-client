<template>
  <div>
    <nuxt/>
    <TheMenuCardModal />
    <TheReviewFormModal />
    <LesnayaMapModal />
    <KazakovaMapModal />
    <SushevkaMapModal />
  </div>
</template>

<script>
  import TheMenuCardModal from '@/components/globals/modals/TheMenuCardModal'
  import TheReviewFormModal from '@/components/globals/modals/TheReviewFormModal'
  import LesnayaMapModal from '@/components/globals/modals/LesnayaMapModal'
  import KazakovaMapModal from '@/components/globals/modals/KazakovaMapModal'
  import SushevkaMapModal from '@/components/globals/modals/SushevkaMapModal'

  export default {
      components: {
          TheMenuCardModal,
          TheReviewFormModal,
          LesnayaMapModal,
          KazakovaMapModal,
          SushevkaMapModal
      },
  }
</script>