<template>
    <div>
        <div v-for="(variation, index) in variations" :key="index">
            <span style="color: #000; ">{{ variation.price }}</span> / <span style="color: #70747d; font-style: italic;"><small>{{ variation.name }}&nbsp;{{ variation.measure_type }}</small></span>
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

<style lang="scss" scoped>

</style>
