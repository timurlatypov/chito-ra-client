<template>
  <div class="px-2 sm:px-6">
    <div class="categories">
      <ul>
        <li v-for="(tab, index) in tabs" :class="{'active': tab.active}" :key="index">
          <span @click="switchTab(tab.slug)">{{ tab.name }}</span>
        </li>
      </ul>
    </div>
    <slot/>
    <div class="control-wrapper pt-4">

      <div style="text-align: center; justify-self: center">
        <a @click.prevent="scrollTo()"
           class="uppercase bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 font-bold rounded-full border-2"
        >
          <span class="icon is-cursor-pointer">
            <i class="fas fa-arrow-up"></i>
          </span>
        </a>
      </div>

      <div style="text-align: right">
        <template v-for="(tab, index) in tabs">
          <div
            v-show="tab.active"
            :key="tab.slug"
          >
            <a v-if="index < tabs.length-1"
               @click.prevent="nextTab(tabs[index+1].slug)"
               class="mr-4 uppercase bg-gray-300 border-gray-300 text-gray-700 hover:text-black px-4 py-2 font-bold rounded-full border-2"
            >
              <nobr>
                {{ tabs[index+1].name }}&nbsp;
                <span class="icon is-cursor-pointer">
                <i class="fas fa-arrow-right"></i>
              </span>
              </nobr>
            </a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex"

  export default {
    data() {
      return {
        tabs: []
      }
    },
    computed: {
      ...mapGetters('events', {
        count: "getPopularCount",
        categories: 'getCategories',
        limit: 'getLimit',
        empty: 'cart/empty',
        authenticated: 'user/isAuthenticated'
      }),
    },
    methods: {
      ...mapActions('events', [
        "loadLimitedPopularEvents"
      ]),
      findTab(slug) {
        return this.tabs.find((tab) => {
          return tab.slug === slug
        })
      },
      switchTab(slug) {
        const selectedTab = this.findTab(slug);

        if (typeof selectedTab === 'undefined') {
          return
        }

        this.tabs.forEach((tab) => {
          tab.active = (tab.slug === selectedTab.slug)
        })
      },
      nextTab(next) {
        this.switchTab(next)
        this.scrollTo()
      },
      scrollTo() {
        this.$scrollTo('#top');
      }
    },
    created() {
      this.tabs = this.$children
    },
    mounted() {
      this.switchTab(this.tabs[0].slug)
    }
  }
</script>

<style lang="scss">
  @import '../../../assets/styles/_media.scss';
  @import "../../../assets/styles/variables";

  .categories {
    position: relative;
    display: block;
    max-width: 1000px;
    margin: 0 auto;

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      list-style: none;
      justify-content: center;
      margin: 0;
      padding: 0;


      li {
        position: relative;
        display: inline-block;
        margin: 0 10px 10px 0;

        &.active {
          span {
            content: "";
            border: 1px solid $bg-color-1;
            background-color: $bg-color-1;
            color: $color-1;
          }
        }

        &:last-child {
          margin-right: 0;
        }

        span {
          display: block;
          color: $color-3;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: -0.01px;
          user-select: none;
          text-decoration: none;
          white-space: nowrap;
          outline: none;
          cursor: pointer;
          padding: 10px 15px;
          box-sizing: border-box;
          border: 1px solid black;
          border-radius: 50px;
          line-height: 100%;
        }

        @include media(sm) {
          margin: 0 20px 20px 0;

          span {
            font-size: 16px;
            padding: 10px 25px;
          }
        }
      }
    }
  }

  .control-wrapper {
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 0;
    box-sizing: border-box;
    margin-top: 30px;
  }

  .category {

    &-list {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 20px;
      grid-row-gap: 20px;
      position: relative;

      @include media(md) {
        grid-template-columns: repeat(2, 1fr);
      }
      @include media(lg) {
        grid-template-columns: repeat(3, 1fr);
      }
      @include media(xxl) {
        grid-template-columns: repeat(4, 1fr);
      }

      &__item {
        text-align: left;
        border-radius: 15px;
        overflow: hidden;
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        background: #ffffff;
        //border: 1px solid #fbfbfb;
        transition: all .4s ease;
        padding: 10px;

        &:hover {
          -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        }

        .product-thumb {
          position: relative;
          display: block;
          max-height: none !important;
          margin-bottom: 0;
          overflow: hidden;
          transform: translateZ(0);
          border-radius: 10px 10px 0 0;
        }

        .product-text {
          min-height: 60px;
          padding: 0;

          &__title {
            font-family: 'PT Serif', serif;
            font-size: 20px;
            color: $color-3;
            font-weight: 700;
            line-height: 110%;
            padding: 6px 0;
          }
        }
      }

    }
  }
</style>
