import Vue from 'vue'

import ru from 'vee-validate/dist/locale/ru';
import VeeValidate, { Validator } from 'vee-validate';
VeeValidate.Validator.localize('ru', ru);

const dictionary = {
  ru: {
    attributes: {
      name: 'Имя',
      phone: 'Телефон',
      address: 'Адрес',
      comment: 'Комментарий',
    }
  }
};
Validator.localize(dictionary);

Vue.use(VeeValidate, {
  events: 'change'
});

Vue.use(VeeValidate);

