<template>
  <div>
    <nuxt/>
    <TheMenuCardModal/>
    <TheReviewFormModal/>
    <LesnayaMapModal/>
    <KazakovaMapModal/>
    <SushevkaMapModal/>
    <AuthModal/>
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  import TheMenuCardModal from '@/components/globals/modals/TheMenuCardModal'
  import TheReviewFormModal from '@/components/globals/modals/TheReviewFormModal'
  import LesnayaMapModal from '@/components/globals/modals/LesnayaMapModal'
  import KazakovaMapModal from '@/components/globals/modals/KazakovaMapModal'
  import SushevkaMapModal from '@/components/globals/modals/SushevkaMapModal'
  import AuthModal from '@/components/globals/modals/auth/AuthModal'

  export default {
    components: {
      TheMenuCardModal,
      TheReviewFormModal,
      LesnayaMapModal,
      KazakovaMapModal,
      SushevkaMapModal,
      AuthModal,
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
