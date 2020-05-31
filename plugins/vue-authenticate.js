import VueAuthenticate from 'vue-authenticate'
import Vue from 'vue'
import axios from 'axios'

const clientIds = process.env.socialClientIds

const getPopupOptions = (width, height) => {
  const top = (window.screen.height - height) / 2
  const left = (window.screen.width - width) / 2

  return {
    width,
    height,
    top,
    left
  }
}

const getRedirectUrl = () => window.location.origin

Vue.prototype.$auth = VueAuthenticate.factory(axios, {
  tokenPath: 'access_token',
  tokenName: 'access_token',
  baseUrl: `${process.env.baseUrl}oauth/callback`,
  tokenPrefix: '',
  storageType: 'memory',
  bindRequestInterceptor() {
    this.$http.interceptors.request.use((config) => {
      config.method = 'get'
      config.params = {
        code: config.data.code
      }
      config.data = {}

      return config
    })
  },
  bindResponseInterceptor: function () {
    this.$http.interceptors.response.use((response) => {
      console.log(response)
      return response
    })
  },
  providers: {
    vk: {
      name: 'vk',
      url: '/vkontakte',
      authorizationEndpoint: 'https://oauth.vk.com/authorize',
      redirectUri: getRedirectUrl(),
      requiredUrlParams: ['scope', 'display'],
      scope: ['email'],
      display: 'popup',
      responseType: 'code',
      oauthType: '2.0',
      popupOptions: getPopupOptions(660, 400),
      clientId: clientIds.vkontakte
    },
    google: {
      name: 'google',
      url: '/google',
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      redirectUri: getRedirectUrl(),
      optionalUrlParams: ['display'],
      requiredUrlParams: ['scope'],
      scope: ['profile', 'email'],
      responseType: 'code',
      scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: getPopupOptions(460, 600),
      clientId: clientIds.google
    },
    yandex: {
      name: 'yandex',
      url: '/yandex',
      authorizationEndpoint: 'https://oauth.yandex.ru/authorize',
      redirectUri: getRedirectUrl(),
      requiredUrlParams: ['scope'],
      scope: ['login:email', 'login:avatar', 'login:info'],
      responseType: 'code',
      scopeDelimiter: ' ',
      oauthType: '2.0',
      popupOptions: getPopupOptions(660, 400),
      clientId: clientIds.yandex
    },
    facebook: {
      name: 'facebook',
      url: '/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      redirectUri: getRedirectUrl(),
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      responseType: 'code',
      scopeDelimiter: ',',
      oauthType: '2.0',
      popupOptions: getPopupOptions(660, 400),
      clientId: clientIds.facebook
    },
    mailru: {
      name: 'mailru',
      url: '/mailru',
      authorizationEndpoint: 'https://connect.mail.ru/oauth/authorize',
      redirectUri: getRedirectUrl(),
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      responseType: 'code',
      scopeDelimiter: ',',
      oauthType: '2.0',
      popupOptions: getPopupOptions(660, 400),
      clientId: clientIds.mailru
    }
  }
})
