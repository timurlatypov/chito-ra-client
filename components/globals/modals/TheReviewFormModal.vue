<template>
    <TheModal name="review-form">
        <template slot="body" slot-scope="{ params }">
            <div class="review-form">
                <div class="review-form__container">
                    <h3>Оставить отзыв</h3>

                    <form action="">
                        <div class="field">
                            <label class="label">О каком ресторане Ваш отзыв?</label>
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>«Чито-ра» на Казакова</option>
                                        <option>«Чито-ра» на Сущевском Валу</option>
                                        <option>«Чито-ра» на Лесной</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Имейл</label>
                            <div class="control">
                                <input class="input" type="email" placeholder="">
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Отзыв</label>
                            <div class="control">
                                <textarea class="textarea" placeholder=""></textarea>
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <TheButton class="btn-primary">Отправить</TheButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </TheModal>
</template>

<style lang="scss">
    @import "../../../assets/styles/variables";
    @import '../../../assets/styles/_media.scss';

    .review-form {
        width: 100%;
        background-color: white;

        &__container {
            padding: 20px 40px 40px 40px;
            text-align: center;

            & .select select, .textarea, .input {
                border: 1px solid black;
            }

            form {
                text-align: left;
            }

            label {
                font-family: "Graphik LCG", sans-serif;
                font-weight: 500;
            }
        }
    }

</style>

<script>
    import TheButton from "../TheButton";
    export default {
        components: {TheButton}
    }
</script>