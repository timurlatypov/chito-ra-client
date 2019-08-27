<template>
    <table class="table is-hoverable is-fullwidth">
        <tbody>
            <tr v-for="address in addresses" :key="address.id">
                <td>
                    <p :class="{ 'has-text-weight-bold' : address.id === selectedAddress.id }">
                        {{ address.name }}<br>
                        {{ address.address }}<br>
                        {{ address.comment }}<br>
                    </p>
                </td>
                <td>
                    <button
                            @click.prevent="$emit('click', address)"
                            :disabled="address.id === selectedAddress.id"
                            class="button is-info">Брат вези сюда</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        props: {
            addresses: {
                required: true,
                type: Array
            },
            selectedAddress: {
                required: true,
                type: Object
            }
        }
    }
</script>

<style lang="scss">

</style>