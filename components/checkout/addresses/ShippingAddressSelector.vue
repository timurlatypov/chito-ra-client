<template>
  <div class="text-left p-8">

    <div v-for="address in addresses" :key="address.id">
      <div class="flex justify-between">
        <div>
          <p :class="{ 'has-text-weight-bold' : address.id === selectedAddress.id }">
            {{ address.name }}<br>
            {{ address.address }}<br>
            {{ address.phone }}<br>
            {{ address.comment }}<br>
          </p>
        </div>

        <div>
          <template v-if="address.id === selectedAddress.id">
            <button
              :disabled="address.id === selectedAddress.id"
              class="text-sm block mr-4 uppercase bg-gray-300 border-gray-300 text-gray-500 hover:text-gray-500 px-4 py-2 font-bold rounded-full border-2"
            >
              <nobr>
              <span class="icon is-cursor-pointer">
                  <i class="fas fa-check"></i>
                </span>&nbsp;
                Выбран
              </nobr>
            </button>
          </template>
          <template v-else>
            <button
              @click.prevent="$emit('click', address)"
              :disabled="address.id === selectedAddress.id"
              class="text-sm block mr-4 uppercase bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 font-bold rounded-full border-2"
            >
              <nobr>
              <span class="icon is-cursor-pointer">
                  <i class="fas fa-arrow-right"></i>
                </span>&nbsp;
                Привезти сюда
              </nobr>
            </button>
          </template>

        </div>
      </div>
      <hr>

    </div>

  </div>
</template>

<script>
  export default {
    props: {
      addresses: {
        required: true,
        type: Array
      },
      selectedAddress: {
        required: true,
        type: Object
      }
    }
  }
</script>

<style lang="scss">

</style>
