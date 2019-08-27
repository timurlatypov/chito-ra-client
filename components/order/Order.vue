<template>
    <tr>
        <td>
            #{{ order.id }}
        </td>
        <td>
            {{ order.created_at }}
        </td>
        <td>
            <div v-for="variation in products" :key="variation.id">
                <nuxt-link :to="{
                    name: 'product-slug',
                    params: {
                        slug: variation.product.slug
                    }
                }">{{ variation.product.name }} ({{ variation.name }}) {{ variation.type }}</nuxt-link>
            </div>
            <template v-if="moreProducts > 0">
                и еще {{ moreProducts }}
            </template>
        </td>
        <td>{{ order.subtotal }}</td>
        <td>
            <span
                    class="tag is-medium"
                    :class="{
                        'is-success': this.order.status === 'доставлен',
                        'is-info': this.order.status === 'в работе' || this.order.status === 'создан',
                        'is-danger': this.order.status === 'отменен',
                    }"
            >
                {{ order.status }}
            </span>
        </td>
    </tr>
</template>

<script>
    export default {
        props: {
          order: {
              required: true,
              type: Object
          }
        },
        data() {
          return {
              maxProducts: 2
          }
        },
        computed: {
            products () {
                return this.order.products.slice(0, this.maxProducts)
            },

            moreProducts () {
                return this.order.products.length - this.maxProducts
            }
        }
    }
</script>

<style lang="scss">

</style>