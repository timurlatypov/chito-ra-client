<template>
  <div>
    <div v-for="(variation, index) in variations" :key="index">
      <nobr><span class="modal-box__volume">{{ variation.name }} {{ variation.measure_type }} /</span> <span
        class="modal-box__price">{{ variation.price }}</span></nobr>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      variations: {
        required: true,
        type: Array
      },
      type: {
        required: true,
        type: String
      }
    }
  }
</script>
