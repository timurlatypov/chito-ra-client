<template>
    <nav class="navbar is-fixed-top" :class="{ 'navbar--scrolled' : scrolledDown }">
        <div class="container is-fluid">
            <div class="navbar-brand">
                <nuxt-link :to="{name: 'index'}" class="navbar-item">
                    <div class="logo-wrap">
                        <AppLogo color="#fff"></AppLogo>
                    </div>
                </nuxt-link>
                <div class="navbar-burger burger" data-target="nav">
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
                <a class="navbar-item">
                    <span class="icon is-cursor-pointer">
                        <i class="fas fa-shopping-cart fa-lg"></i>
                    </span>&nbsp;
                    ({{ cartCount }})
                </a>
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
        </div>
    </nav>
</template>

<script>
    import { mapGetters } from 'vuex'
    import AppLogo from '../../components/shared/AppLogo'

    export default {
        components: {
            AppLogo
        },
        data () {
            return {
                scrollCount: 0,
                scrolledDown: false
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
            }
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
