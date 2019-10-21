<template>
    <div class="review">
        <h4 class="white">Рассказать</h4>
        <TheButton class="btn--3" @click.native="$modal.show('review-form')">Написать отзыв</TheButton>
    </div>
</template>

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