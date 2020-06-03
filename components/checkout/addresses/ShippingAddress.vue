<template>
  <div class="text-center">
    <h4>Адрес доставки</h4>
    <div class="p-4 text-sm text-center text-black">
      Создайте адрес доставки или выберите ранее сохраненный!
    </div>

    <template v-if="selecting">
      <ShippingAddressSelector
        :addresses="addresses"
        :selectedAddress="selectedAddress"
        @click="addressSelected"
      />
      <a @click.prevent="selecting = false"
         class="bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2"
      >
        Назад
      </a>
    </template>

    <template v-else-if="creating">
      <ShippingAddressCreator
        @cancel="creating = false"
        @created="created"
      />
    </template>

    <template v-else-if="selectedAddress">
      <template v-if="selectedAddress">
        <div class="text-center p-4">

          <div class="tracking-wide font-bold text-gray-700">
            Телефон для связи
          </div>
          <div class="text-gray-700 mb-2 ml-4">
            {{ selectedAddress.phone }}
          </div>

          <div class="tracking-wide font-bold text-gray-700">
            Адрес доставки
          </div>
          <div class="text-gray-700 mb-2 ml-4">
            {{ selectedAddress.address }}
          </div>

          <div class="tracking-wide font-bold text-gray-700">
            Комментарий к заказу
          </div>
          <div class="text-gray-700 mb-2 ml-4">
            {{ selectedAddress.comment }}
          </div>

        </div>
      </template>

      <a @click.prevent="selecting = true"
         class="mr-2 sm:mr-4 bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2"
      >
        Поменять адрес
      </a>
      <a @click.prevent="creating = true"
         class="bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2"
      >
        Добавить адрес
      </a>
    </template>

    <template v-else>
      <div class="w-full text-center">
        <button @click.prevent="creating = true"
                class=" mx-auto text-sm block uppercase bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 font-bold rounded-full border-2">
          Добавить адрес
        </button>
      </div>

    </template>
  </div>
</template>

<script>
  import ShippingAddressSelector from './ShippingAddressSelector'
  import ShippingAddressCreator from './ShippingAddressCreator'

  export default {
    components: {
      ShippingAddressSelector,
      ShippingAddressCreator
    },
    props: {
      addresses: {
        required: true,
        type: Array
      }
    },
    data() {
      return {
        selecting: false,
        creating: false,
        localAddresses: this.addresses,
        selectedAddress: null
      }
    },
    watch: {
      selectedAddress(address) {
        this.$emit('input', address.id)
      }
    },
    computed: {
      defaultAddress() {
        return this.localAddresses.find(a => a.default)
      }
    },
    methods: {
      addressSelected(address) {
        this.switchAddress(address)
        this.selecting = false
      },
      switchAddress(address) {
        this.selectedAddress = address
      },
      created(address) {
        this.localAddresses.push(address)
        this.creating = false

        this.switchAddress(address)
      }
    },
    created() {
      if (this.addresses.length) {
        this.switchAddress(this.defaultAddress)
      }
    },
    mounted() {

    }
  }
</script>

<style lang="scss">

</style>
