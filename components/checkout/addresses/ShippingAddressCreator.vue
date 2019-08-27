<template>
    <form action="#" @submit.prevent="store">
        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" v-model="form.name">
            </div>
        </div>

        <div class="field">
            <label class="label">Address</label>
            <div class="control">
                <input class="input" type="text" v-model="form.address">
            </div>
        </div>

        <div class="field">
            <label class="label">Comment</label>
            <div class="control">
                <input class="input" type="text" v-model="form.comment">
            </div>
        </div>

        <div class="field">
            <p class="control">
                <button class="button is-info">
                    Add address
                </button>
                <a class="button is-text" @click.prevent="$emit('cancel')">Cancel</a>
            </p>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    address: '',
                    comment: '',
                    default: true
                }
            }
        },
        methods: {
            async store() {
                let response = await this.$axios.$post('addresses', this.form);

                this.$emit('created', response.data)
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">

</style>