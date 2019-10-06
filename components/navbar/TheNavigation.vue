<template>
    <nav class="navbar is-fixed-top" :class="{ 'navbar--scrolled' : scrolledDown || mobileActive }">
        <div class="container is-fluid">
            <div class="navbar-brand">
                <nuxt-link :to="{name: 'index'}" class="navbar-item">
                    <div class="logo-wrap">
                        <AppLogoSign color="#fff"></AppLogoSign>
                    </div>
                </nuxt-link>
                <div class="navbar-burger burger" data-target="nav" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div class="navbar-menu centered">
                <template v-for="category in categories">
                    <template v-if="category.children.length">
                            <nuxt-link v-for="child in category.children" :key="child.slug" :to="{ name: child.slug, params: { slug: child.slug } }" class="navbar-item">
                                {{ child.name }}
                            </nuxt-link>
                        <!--<div :key="category.slug" class="navbar-item is-hoverable has-dropdown">-->
                           <!--<span class="navbar-link is-arrowless">-->
                               <!--{{ category.name }}-->
                           <!--</span>-->
                           <!--<div class="navbar-dropdown">-->
                               <!--<nuxt-link-->
                                       <!--:to="{ name: child.slug, params: { scope: child.slug } }"-->
                                       <!--class="navbar-item"-->
                                       <!--v-for="child in category.children"-->
                                       <!--:key="child.slug">-->
                                <!--{{ child.name }}-->
                               <!--</nuxt-link>-->
                           <!--</div>-->
                       <!--</div>-->
                    </template>
                    <template v-else>
                        <nuxt-link :to="{ name: category.slug, params: { slug: category.slug } }" :key="category.slug" class="navbar-item">
                            {{ category.name }}
                        </nuxt-link>
                    </template>
                </template>
            </div>
            <div class="navbar-end">
                <a class="navbar-item call-us" href="tel:+74997747474">+7 (499) 444-74-74</a>
                <!--<a class="navbar-item">-->
                    <!--<span class="icon is-cursor-pointer">-->
                        <!--<i class="fas fa-shopping-cart fa-lg"></i>-->
                    <!--</span>&nbsp;-->
                    <!--({{ cartCount }})-->
                <!--</a>-->
                    <!--<template v-if="!$auth.loggedIn">-->
                        <!--<nuxt-link :to="{ name: 'auth-signin' }" class="navbar-item">-->
                            <!--Войти-->
                        <!--</nuxt-link>-->
                    <!--</template>-->
                    <!--<template v-else>-->
                        <!--<nuxt-link :to="{ name: 'cart' }" class="navbar-item">-->
                            <!--Корзина ({{ cartCount }})-->
                        <!--</nuxt-link>-->
                    <!--</template>-->
                </div>
            <div class="navbar-mobile" v-if="mobileActive">
                <template v-for="category in categories">
                    <template v-if="category.children.length">
                        <nuxt-link v-for="child in category.children" :key="child.slug" :to="{ name: child.slug, params: { slug: child.slug } }" class="navbar-item">
                            {{ child.name }}
                        </nuxt-link>
                        <!--<div :key="category.slug" class="navbar-item is-hoverable has-dropdown">-->
                        <!--<span class="navbar-link is-arrowless">-->
                        <!--{{ category.name }}-->
                        <!--</span>-->
                        <!--<div class="navbar-dropdown">-->
                        <!--<nuxt-link-->
                        <!--:to="{ name: child.slug, params: { scope: child.slug } }"-->
                        <!--class="navbar-item"-->
                        <!--v-for="child in category.children"-->
                        <!--:key="child.slug">-->
                        <!--{{ child.name }}-->
                        <!--</nuxt-link>-->
                        <!--</div>-->
                        <!--</div>-->
                    </template>
                    <template v-else>
                        <nuxt-link :to="{ name: category.slug, params: { slug: category.slug } }" :key="category.slug" class="navbar-item">
                            {{ category.name }}
                        </nuxt-link>
                    </template>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        data () {
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
                cartCount: 'cart/count'
            })
        },
        methods: {
            handleScroll() {
                this.scrollCount = window.scrollY
            },
            toggleMenu () {
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