<template>
    <tr>
        <td width="120">
            <img src="http://via.placeholder.com/60x60" alt="">
        </td>
        <td>
            {{ product.product.name }} / {{ product.type }} {{ product.name }}
        </td>
        <td width="160">
            <div class="field">
                <div class="control">
                    <div class="select is-fullwidth">
                        <select v-model="quantity">
                            <option value="0" v-if="quantity == 0">0</option>
                            <!--v-for="x in product.stock_count"-->
                            <option
                                    :value="x"
                                    v-for="x in 20"
                                    :key="x"
                                    :selected="x == product.quantity ? product.quantity : 20">
                                {{ x }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </td>
        <td>
            {{ product.total }}
        </td>
        <td>
            <a href="" @click.prevent="destroy(product.id)">remove</a>
        </td>
    </tr>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        props: {
          product: {
              required: true,
              type: Object
          }
        },

        computed: {
            quantity: {
                get () {
                    return this.product.quantity
                },
                set (quantity) {
                    this.update({ productId: this.product.id, quantity })
                }
            }
        },

        methods: {
            ...mapActions({
                destroy: 'cart/destroy',
                update: 'cart/update'
            })
        },
        mounted() {

        }
    }
</script>

<style lang="scss">

</style>