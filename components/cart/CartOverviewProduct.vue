<template>
  <div class="flex flex-col sm:flex-row content-around sm:justify-between">

    <div class="sm:order-1 hidden sm:block w-32 flex-none px-2 py-2 align-middle text-gray-800">
      <img class="rounded"
           :src="`https://api.chito-ra.ru/storage/${product.product.images[0].name}`"
           alt="">
    </div>

    <div class="order-1 sm:order-2 w-64 align-left sm:align-middle px-1 sm:px-4 py-1 sm:py-3 align-middle">
      <p class="font-bold text-normal sm:text-lg text-gray-700"><nobr>{{ product.product.name }}</nobr></p>
      <p class="text-sm text-gray-700"><span v-if="product.name">{{ product.name }}&nbsp;</span>{{ product.vol }} {{ product.measure_type }}</p>
    </div>

    <div class="order-2 sm:order-3 w-32 self-start sm:self-center px-1 sm:px-4 py-1 sm:py-3">
      <div class="control">
        <select v-model="quantity"
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option value="0" v-if="quantity == 0">0</option>
          <template v-for="x in product.max_order ? product.max_order : 20">
            <option
              v-if="x >= product.min_order"
              :value="x"
              :key="x"
              :selected="x == product.quantity ? product.quantity : 10">
              {{ x }}
            </option>
          </template>

        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </div>

    <div class="order-4 sm:order-4 w-32 self-start sm:self-center px-1 sm:px-4 py-1 sm:py-3 text-gray-700">
      {{ product.total }}
    </div>

    <div class="order-3 sm:order-5 w-32 self-start sm:self-center px-1 sm:px-4 py-1 sm:py-3 text-right">
      <button @click.prevent="destroy(product.id)"
              class="transition duration-300 ease-in-out uppercase bg-gray-200 border border-gray-200 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full">
        <nobr>
          Удалить&nbsp;
          <span class="icon is-cursor-pointer">
            <i class="fas fa-trash-alt"></i>
          </span>
        </nobr>
      </button>
    </div>

    <hr>

  </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    props: {
      product: {
        required: true,
        type: Object
      }
    },

    computed: {
      quantity: {
        get() {
          return this.product.quantity
        },
        set(quantity) {
          this.update({productId: this.product.id, quantity})
        }
      }
    },

    methods: {
      ...mapActions({
        destroy: 'cart/destroy',
        update: 'cart/update'
      })
    },
  }
</script>

<style lang="scss">

</style>
