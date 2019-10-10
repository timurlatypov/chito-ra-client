import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

Vue.use(YmapPlugin, {
    apiKey: '31da7711-1244-4e74-a71e-f19399139ea3',
    lang: 'ru_RU',
    coordorder: 'latlong',
})