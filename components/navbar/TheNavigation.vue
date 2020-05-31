<template>

  <nav
    class="z-20 px-6 py-6 sm:px-6 md:py-6 md:px-6 lg:px-16 lg:py-8 flex items-center justify-between fixed w-full flex-wrap bg-transparent p-6"
    :class="{ 'bg-sand' : scrolledDown || mobileActive, 'border-b border-navi' : mobileActive } ">

    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <nuxt-link
        :to="{name: 'index'}">
        <div class="w-32">
          <AppLogoSign :color="scrolledDown || mobileActive ? '#000' : '#FFF'"></AppLogoSign>
        </div>
      </nuxt-link>
    </div>

    <div class="block lg:hidden">
      <button @click="toggleMenu"
              class="flex items-center px-3 py-2 text-white ">
        <svg class="h-8 w-8" :fill="scrolledDown || mobileActive ? '#000' : '#FFF'" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
        </svg>
      </button>
    </div>

    <div class="hidden lg:block w-full block flex-grow lg:flex lg:items-center lg:w-auto align-end  text-center">
      <div class="text-lg align-center uppercase font-bold lg:flex-grow">
        <template v-for="category in categories">
          <template v-if="category.children.length">
            <nuxt-link v-for="child in category.children" :key="child.slug"
                       :to="{ name: child.slug, params: { slug: child.slug } }"
                       :class="scrolledDown || mobileActive ? 'text-navi' : 'text-white'"
                       class="block mt-4 lg:inline-block tracking-wider lg:mt-0 pr-6 hover:text-orange-700">
              {{ child.name }}
            </nuxt-link>
          </template>
          <template v-else>
            <nuxt-link :to="{ name: category.slug, params: { slug: category.slug } }" :key="category.slug"
                       :class="scrolledDown || mobileActive ? 'text-navi' : 'text-white'"
                       class="block lg:inline-block mt-4 tracking-wider lg:mt-0 pr-6 hover:text-orange-700">
              {{ category.name }}
            </nuxt-link>
          </template>
        </template>
      </div>
      <div>
        <template v-if="!authenticated">
          <div class="m-auto">
            <a @click.prevent="$modal.show('auth')"
               :class="scrolledDown ? 'bg-gray-300 border-gray-300 text-gray-700 hover:text-black' : 'hover:text-white border-white text-white'"
               class="px-4 py-2 text-sm font-bold rounded-full border-2">
              ВОЙТИ&nbsp;
              <span class="icon is-cursor-pointer">
                  <i class="fas fa-key fa-sm"></i>
                </span>
            </a>
          </div>
        </template>
        <template v-else>
          <div class="inline-block m-auto sm:mr-2 md:mr-4">
            <nuxt-link :to="{ name: 'cart' }"
                       :class="scrolledDown ? 'bg-gray-300 border-gray-300 text-gray-700 hover:text-black' : 'hover:text-green-700 border-white text-white'"
                       class="px-4 py-2 text-sm font-bold rounded-full border-2">
              <span class="icon is-cursor-pointer">
                <i class="fas fa-shopping-cart fa-sm"></i>
              </span>&nbsp;
              {{ cartCount }}
              ТОВАРОВ
            </nuxt-link>
          </div>
          <div class="m-auto hidden sm:inline-block">
            <a @click.prevent="logout"
               :class="scrolledDown ? 'bg-gray-300 border-gray-300 text-gray-700 hover:text-black' : 'hover:text-red-700 border-white text-white'"
               class="hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2"
            >
              ВЫЙТИ&nbsp;
              <span class="icon is-cursor-pointer">
                <i class="fas fa-lock fa-sm"></i>
              </span>
            </a>
          </div>

        </template>
      </div>
    </div>

    <!-- Mobile menu-->
    <div v-if="mobileActive"
         class="block lg:hidden bg-sand w-full align-center justify-center block flex-grow lg:flex lg:items-center lg:w-auto">

      <div class="text-lg text-center align-center uppercase font-bold lg:flex-grow">
        <template v-for="category in categories">
          <template v-if="category.children.length">
            <nuxt-link v-for="child in category.children" :key="child.slug"
                       :to="{ name: child.slug, params: { slug: child.slug } }"
                       class="block mt-4 lg:inline-block lg:mt-0 mr-4 text-navi hover:text-orange-700">
              {{ child.name }}
            </nuxt-link>
          </template>
          <template v-else>
            <nuxt-link :to="{ name: category.slug, params: { slug: category.slug } }" :key="category.slug"
                       class="block lg:inline-block mt-4 lg:mt-0 mr-4 text-navi hover:text-orange-700">
              {{ category.name }}
            </nuxt-link>
          </template>
        </template>
      </div>

      <div>
        <template v-if="!authenticated">
          <div class="w-full text-center pt-8 pb-2">
            <div class="m-auto">
              <a @click.prevent="$modal.show('auth')"
                 class="px-4 py-2 text-sm font-bold rounded-full border-2 bg-gray-300 border-gray-300 text-gray-700 hover:text-black">
                ВОЙТИ&nbsp;
                <span class="icon is-cursor-pointer">
                    <i class="fas fa-key fa-sm"></i>
                  </span>
              </a>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="w-full text-center pt-8 pb-2">
            <div class="inline-block m-auto sm:mr-2 md:mr-4">
              <nuxt-link :to="{ name: 'cart' }"
                         class="px-4 py-2 text-sm font-bold rounded-full border-2 bg-gray-300 border-gray-300 text-gray-700 hover:text-black">
              <span class="icon is-cursor-pointer">
                <i class="fas fa-shopping-cart fa-sm"></i>
              </span>&nbsp;
                {{ cartCount }}
                ТОВАРОВ
              </nuxt-link>
            </div>
            <div class="inline-block ">
              <a @click.prevent="logout"
                 class="hover:text-black px-4 py-2 text-sm font-bold rounded-full border-2 bg-gray-300 border-gray-300 text-gray-700 hover:text-black"
              >
                ВЫЙТИ&nbsp;
                <span class="icon is-cursor-pointer">
                <i class="fas fa-lock fa-sm"></i>
              </span>
              </a>
            </div>
          </div>

        </template>
      </div>

    </div>

  </nav>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    data() {
      return {
        scrollCount: 0,
        scrolledDown: false,
        mobileActive: false,
      }
    },
    watch: {
      scrollCount: function (val) {
        this.scrolledDown = val > 0
      }
    },
    computed: {
      ...mapGetters({
        categories: 'categories',
        cartCount: 'cart/count',
        authenticated: 'user/isAuthenticated'
      })
    },
    methods: {
      ...mapActions({
        userLogout: 'user/logout'
      }),

      logout() {
        this.userLogout()
        if (this.$route.name !== 'index') {
          this.$router.push({name: 'index'})
        }
      },
      handleScroll() {
        this.scrollCount = window.scrollY
      },
      toggleMenu() {
        this.mobileActive = !this.mobileActive
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
      this.handleScroll();
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import '../../assets/styles/_media.scss';

  .navbar-brand .logo-wrap {
    margin-top: 5px;
    margin-left: 20px;
    width: 150px;
  }

  .navbar-item.call-us {
    display: none;

    @include media(sm) {
      display: flex;
    }
  }

  .navbar-mobile {
    position: fixed;
    width: 100%;
    top: 0;
    background: #f5f3f0;
    min-height: 150px;
    margin-top: 80px;
    border-bottom: 1px solid $color-3;
    color: $color-3;
    padding: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 700;
    z-index: 9999;

    @include media(sm) {

    }
  }


  .navbar-item {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    letter-spacing: 0.04rem;
    text-transform: uppercase;
  }

  a.navbar-item,
  .navbar-link {
    cursor: pointer;

    &:hover,
    &.is-active {
      background-color: $navbar-item-hover-background-color;
      color: $navbar-item-hover-color;
    }
  }

  @media screen and (max-width: 1087px) {
    .navbar-end {
      position: absolute;
      top: 23px;
      right: 60px;
    }
  }

  @media screen and (min-width: 1088px) {
    .navbar-end {
      position: relative;
      min-width: 125px;
    }
    .navbar-brand {
      min-width: 125px;
    }
  }

  .navbar {
    transition: all .2s;
  }

  .navbar {
    .navbar-brand span {
      height: 2px;
      width: 18px;
    }

    .navbar-burger span:nth-child(1) {
      top: calc(50% - 6px);
    }

    .navbar-burger span:nth-child(2) {
      top: calc(50%);
    }

    .navbar-burger span:nth-child(3) {
      top: calc(50% + 6px);
    }

    .navbar-dropdown {
      top: 60px;

      & .navbar-item {
        padding-left: 0.75rem;

        &:hover {
          background-color: transparent;
          border-bottom: white solid 5px;
        }
      }
    }

    .navbar-menu.centered {
      justify-content: center;
    }

    &.navbar--scrolled {
      background-color: #f5f3f0;
      box-shadow: 0 2px 24px rgba(100, 100, 100, .5);

      .navbar-brand svg {
        fill: $color-3;
      }

      a.navbar-item,
      a.navbar-item span,
      span.navbar-link,
      .navbar-burger {
        color: $color-3;

        &:hover {
          color: #cb7152;
        }

      }

      .navbar-dropdown {
        top: 60px;
        left: -1rem;
        background-color: white;
        box-shadow: 0 4px 2px -2px rgba(100, 100, 100, .3);

        & .navbar-item {
          padding-left: 1.75rem;

          &:hover {
            background: none;
            color: #7a980b;
          }
        }
      }

    }
  }


</style>
