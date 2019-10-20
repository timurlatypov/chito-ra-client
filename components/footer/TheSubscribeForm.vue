<template>
    <div class="review">
        <h4 class="white">Оставить отзыв</h4>
        <!--<div class="btn btn-primary" @click="$modal.show('review-form')">Написать</div>-->
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>

    *,
    *:before,
    *:after {
        box-sizing: border-box;
        outline: none;
    }

    .review {
        margin: 0 auto 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

</style>