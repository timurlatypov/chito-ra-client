<template>
  <div>
    <nuxt/>
    <TheMenuCardModal/>
    <TheReviewFormModal/>
    <LesnayaMapModal/>
    <KazakovaMapModal/>
    <AuthModal/>
    <ProductVariationsModal/>
    <ProductVariationSingleModal/>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import TheMenuCardModal from '@/components/globals/modals/TheMenuCardModal'
  import TheReviewFormModal from '@/components/globals/modals/TheReviewFormModal'
  import LesnayaMapModal from '@/components/globals/modals/LesnayaMapModal'
  import KazakovaMapModal from '@/components/globals/modals/KazakovaMapModal'
  import AuthModal from '@/components/globals/modals/auth/AuthModal'
  import ProductVariationsModal from '@/components/globals/modals/variations/ProductVariationsModal'
  import ProductVariationSingleModal from '@/components/globals/modals/variations/ProductVariationSingleModal'

  export default {
    components: {
      TheMenuCardModal,
      TheReviewFormModal,
      LesnayaMapModal,
      KazakovaMapModal,
      AuthModal,
      ProductVariationsModal,
      ProductVariationSingleModal,
    },
    computed: {
      ...mapGetters({
        accessToken: 'user/getAccessToken'
      }),
    },
    methods: {
      ...mapActions({
        autoLogin: 'user/autoLogin',
        refreshTokens: 'user/refreshTokens'
      }),
    },
    mounted() {
      this.autoLogin()
    },
  }
</script>
