<template>
  <TheModal name="variations" @before-open="resetOptions">
    <template slot="body" slot-scope="{ params }">
      <div class="w-full bg-white p-6">
        <p class="font-bold text-lg text-gray-700">{{ params.name }}</p>
        <p class="text-sm text-gray-700 pb-4">{{ params.description }}</p>

        <div v-for="(variation_type, index) in params.variations" :key="index">

          <div class="control">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              @change="hasChanged($event, variation_type)">
              <option value="">Выберите</option>
              <option
                v-for="variation in variation_type"
                :key="variation.id"
                :value="variation.id"
                :disabled="!variation.in_stock"
              >
                {{ variation.name }} {{ variation.vol }} {{ variation.measure_type }} - {{ variation.price }}<span v-if="variation.min_order > 1"> / 1 шт.</span>
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>

          <div class="w-32 flex-none self-center" v-if="variation_id">
            <p class="text text-gray-700 pt-4">Количество</p>
            <div class="control">
              <select v-model="quantity"
                      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <template v-for="x in variation.max_order ? variation.max_order : 20">
                  <option
                    v-if="x >= variation.min_order"
                    :value="x"
                    :key="x">
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

          <div class="w-32 flex-none self-center pt-6">
            <button @click.prevent="variation_id != null ? add() : ''"
                    class="transition duration-300 ease-in-out uppercase bg-gray-200 border border-gray-200 text-gray-700 focus:outline-none hover:text-black px-4 py-2 text-sm font-bold rounded-full">
              <nobr>
              <span class="icon is-cursor-pointer">
                <i class="fas fa-check"></i>
              </span>&nbsp;Добавить
              </nobr>
            </button>
          </div>

        </div>
      </div>
    </template>
  </TheModal>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ProductVariationsModal',
    props: {},
    data() {
      return {
        variation: {
          min_order: null,
        },
        variation_id: null,
        quantity: 1,
      }
    },
    computed: {
      ...mapGetters({
        authenticated: 'user/isAuthenticated',
        products: 'cart/products',
        changed: 'cart/changed'
      }),

    },
    methods: {
      ...mapActions({
        store: 'cart/store'
      }),
      hasChanged(event, type) {
        this.variation_id = event.target.value;
        if (this.variation = type.find(v => v.id == this.variation_id)) {
          //
        } else {
          this.variation = {
            min_order: null
          }
          this.variation_id = null
        }

        this.quantity = this.variation.min_order;
      },
      resetOptions(done) {
        this.variation = {
          min_order: null
        }
        this.variation_id = null;
        this.quantity = 1;

        done();
      },
      add() {
        if (this.authenticated) {
          this.store([{
            id: this.variation_id, quantity: this.quantity
          }]).then((response) => {
            this.$modal.hide('variations');
          })
        } else {
          this.$modal.show('auth');
        }
      }
    },
  }
</script>
