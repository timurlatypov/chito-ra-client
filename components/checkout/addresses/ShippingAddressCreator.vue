<template>
  <form class="w-full" action="#" @submit.prevent="validateBeforeSubmit">
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full text-left px-3">
        <label class="block tracking-wide font-bold text-gray-700 mb-2 ml-4" for="name">
          Краткое название
        </label>
        <input
          :class="errors.has('name') ? 'border-red-500' : 'border-gray-200'"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 mb-1 leading-tight focus:outline-none"
          id="name"
          name="name"
          v-model="form.name"
          type="text"
          placeholder="На работу или Домой"
          v-validate="'required'"
        >
        <small v-show="errors.has('name')" class="text-red-500 px-4 mb-3">Для Вашего же удобства :)</small>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full text-left px-3">
        <label class="block tracking-wide font-bold text-gray-700 mb-2 ml-4" for="phone">
          Телефон для связи
        </label>
        <input
          :class="errors.has('phone') ? 'border-red-500' : 'border-gray-200'"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-1 leading-tight focus:outline-none"
          id="phone"
          name="phone"
          v-model="form.phone"
          type="text"
          v-validate="{ required: true, min: 11, regex: /^[0-9(\-+)\s]+$/ }"
          >
        <small v-show="errors.has('phone')" class="text-red-500 px-4 mb-3">Без телефона не свяжемся с Вами!</small>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full text-left px-3">
        <label class="block tracking-wide font-bold text-gray-700 mb-2 ml-4" for="address">
          Адрес доставки
        </label>
        <input
          :class="errors.has('address') ? 'border-red-500' : 'border-gray-200'"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded-full py-3 px-4 mb-1 leading-tight focus:outline-none"
          id="address"
          name="address"
          v-model="form.address"
          type="text"
          v-validate="'required'"
        >
        <small v-show="errors.has('address')" class="text-red-500 px-4 mb-3">Знать бы куда везти!</small>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
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
        <button type="submit"
           class="focus:outline-none mr-4 bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2"
        >Сохранить
        </button>
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
          name: null,
          phone: '',
          address: '',
          comment: '',
          default: true
        }
      }
    },
    methods: {
      validateBeforeSubmit() {
        console.log('validating')
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.store();
          }
        });
      },
      async store() {
        let response = await this.$axios.$post('addresses', this.form);

        this.$emit('created', response.data)
      }
    },
  }
</script>
