<template>
  <div class="delivery-card flex h-full flex-col items-stretch">
    <div class="product-thumb" @click.prevent="$modal.show('menu-card', item)">
      <img oncontextmenu="return false;" v-for="(image, index) in item.images"
           :src="`https://api.chito-ra.ru/storage/${image.name}`" alt="" :key="index">
    </div>
    <div class="product-text">
      <div class="product-text__title">{{ item.name }}</div>
      <template v-if="item.variations">
        <TheItemCardVariations v-for="(variations, type) in item.variations" :key="type" :type="type"
                               :variations="variations"/>
      </template>

      <a @click.prevent="$modal.show('variations', item)"
         class="transition no-underline duration-300 ease-in-out uppercase bg-gray-200 border border-gray-200
        text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full"
      >
        <nobr>
          <span class="icon is-cursor-pointer">
            <i class="fas fa-shopping-cart fa-sm"></i>
          </span>
          &nbsp;Добавить
        </nobr>
      </a>
    </div>
  </div>
</template>

<script>
  import {filters} from '../../mixins/filters'

  export default {
    mixins: [filters],
    props: {
      item: {
        required: true,
        type: Object
      }
    }
  }
</script>
