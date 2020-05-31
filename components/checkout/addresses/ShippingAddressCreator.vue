<template>
  <form class="w-full" action="#">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full text-left px-3">
        <label class="block tracking-wide font-bold text-gray-700 mb-2 ml-4" for="alias">
          Краткое название
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="alias"
          v-model="form.name"
          type="text"
          placeholder="На работу или Домой">
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full text-left px-3">
        <label class="block tracking-wide font-bold text-gray-700 mb-2 ml-4" for="phone">
          Телефон для связи
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="phone"
          v-model="form.phone"
          type="text">
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full text-left px-3">
        <label class="block tracking-wide font-bold text-gray-700 mb-2 ml-4" for="address">
          Адрес доставки
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="address"
          v-model="form.address"
          type="text">
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full text-left px-3">
        <label class="block tracking-wide font-bold text-gray-700 mb-2 ml-4" for="comment">
          Комментарий к заказу
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none"
          id="comment"
          v-model="form.comment"
          type="text">
      </div>
    </div>

    <div class="field">
      <p class="control">
        <a @click.prevent="store"
           class="mr-4 bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2"
        >Сохранить
        </a>
        <a class="border-gray-700 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2"
           @click.prevent="$emit('cancel')">Назад</a>
      </p>
    </div>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          phone: '',
          address: '',
          comment: '',
          default: true
        }
      }
    },
    methods: {
      async store() {
        let response = await this.$axios.$post('addresses', this.form);

        this.$emit('created', response.data)
      }
    },
  }
</script>
