<template>
  <TheModal name="auth">
    <template slot="body" slot-scope="{ params }">
      <div class="bg-white rounded-md p-6 sm:p-6 text-center">
        <span class="icon is-cursor-pointer text-gray-500">
        <i class="fas fa-lock fa-lg" style="font-size: 2rem;"></i>
      </span>
        <h4 class="pb-6">Авторизация</h4>
        <p class="text-base pb-4">Для добавления в корзину необходимо авторизоваться на нашем сайте, воспользуйтесь одним из сервисов.</p>

        Войти через:
        <div class="flex flex-wrap w-full justify-center">
          <div
            v-for="(social, i) in authSocials" :key="i"
            class=""
          >
            <button
              @click.prevent="auth(social.provider)"
              :style="`background-color:${social.color}; color: ${social.text_color}; border: 1px solid ${social.border}`"
              class="m-2 flex-initial transition duration-300 ease-in-out uppercase text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-md">
              {{ social.label }}
            </button>
          </div>
        </div>
      </div>

    </template>
  </TheModal>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'AuthModal',
    data() {
      return {
        isLoading: false,
        acceptButton: {
          name: 'accept',
          value: true
        },
        authSocials: [
          {
            label: 'Вконтакте',
            color: '#5376a4',
            text_color: '#FFF',
            width: 22,
            height: 14,
            provider: 'vk'
          },
          {
            label: 'FaceBook',
            color: '#445d96',
            text_color: '#FFF',
            width: 10,
            height: 20,
            provider: 'facebook'
          },
          {
            label: 'Яндекс',
            color: '#F00',
            text_color: '#FFF',
            width: 12,
            height: 24,
            provider: 'yandex'
          },
          {
            label: 'Google',
            color: '#FFF',
            text_color: '#000',
            border: '#000',
            width: 20,
            height: 20,
            provider: 'google'
          }
          // {
          //   label: '@Mail.ru',
          //   icon: 'social-contacts/mailru',
          //   width: 20,
          //   height: 20,
          //   provider: 'mailru'
          // }
        ]
      }
    },
    methods: {
      ...mapActions({
        fetchUser: 'user/fetchUser',
        saveTokens: 'user/updateTokens',
        getCart: 'cart/getCart',

      }),
      checkboxChangeHandler() {
        this.acceptButton.value = this.event
        !this.acceptButton.value && this.$refs.button.forEach((it) => {
          it.disabled = !it.disabled
        })
      },
      auth(provider) {
        if (this.acceptButton.value) {
          this.isLoading = true
          this.$auth.authenticate(provider)
            .then(async ({data: tokens}) => {
              console.log(tokens);
              await this.saveTokens(tokens)
              await this.fetchUser()
              await this.getCart()
              this.$modal.hide('auth')
              this.isLoading = false
            })
            .catch((e) => {
              this.isLoading = false
              console.log(e)
            })
        }
      }
    }
  }
</script>

<style lang="scss">

</style>

