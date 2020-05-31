<template>
  <TheContent>
    <div class="text-center" v-show="!empty">
      <nuxt-link :to="{ name: 'cart' }" v-if="!empty"
                 class=" transition duration-300 ease-in-out hover:text-white uppercase text-white bg-orange-700 hover:bg-navi px-6 py-4 text font-bold rounded-full">
        Оформить заказ
      </nuxt-link>
      <div class="m-6 text-sm">Количество выбранных блюд выставляется при оформлении заказа.</div>
    </div>

    <div class="text-center" id="top">
      <TheDeliveryTabs>
        <TheTab v-for="(category, index) in data" :key="index" :products="category.products" :name="category.name"
                :slug="category.slug"/>
      </TheDeliveryTabs>
    </div>
  </TheContent>
</template>

<script>
  import {mapGetters} from "vuex"

  export default {
    props: {
      data: {
        required: true,
        type: Array
      }
    },
    computed: {
      ...mapGetters({
        empty: 'cart/isEmpty',
      }),
    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import "../../assets/styles/_media.scss";

  .delivery-blocks {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    align-items: stretch;
    justify-content: center;
    background-color: $bg-color-3;
    margin: -50px 0 -50px 0;
    padding: 0 15px;

    @include media(sm) {
      grid-template-columns: repeat(3, 1fr);
      padding: 0;
    }
    @include media(md) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .item-1 {
    display: none;
    width: 100%;
    order: 1;

    @include media(sm) {
      display: block;
    }
  }

  .item-2 {
    position: relative;
    order: 2;
    background-color: white;
    text-align: center;
    border-radius: 25px;

    &::after {
      content: '';
      position: absolute;
      height: 50px;
      width: 200px;
      background: $backgroung-ormanent-white no-repeat bottom;
      transform: translateX(50%);
      top: -49px;
      right: 50%;
    }

    &::before {
      content: '';
      position: absolute;
      height: 50px;
      width: 200px;
      background: $backgroung-ormanent-white no-repeat bottom;
      transform: translateX(50%) rotate(180deg);
      bottom: -49px;
      right: 50%;
    }
  }

  .item-3 {
    display: none;
    width: 100%;
    order: 3;

    @include media(sm) {
      display: block;
    }
  }
</style>
