<template>
    <div>
        <div v-for="(variation, index) in variations" :key="index">
            <span style="color: #70747d; font-style: italic;">{{ variation.name }} гр</span> / <b>{{ variation.price }}</b>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            variations: {
                required: true,
                type: Array
            },
            type: {
                required: true,
                type: String
            }
        }
    }
</script>

<style lang="scss">

</style>