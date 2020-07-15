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
                                    <select v-model="data.restaurant">
                                        <option value="" disabled>Выберите из списка ...</option>
                                        <option value="«Чито-ра» на Казакова">«Чито-ра» на Казакова</option>
                                        <option value="«Чито-ра» на Лесной">«Чито-ра» на Лесной</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Имейл</label>
                            <div class="control">
                                <input class="input" type="email" v-model="data.email" required>
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Отзыв</label>
                            <div class="control">
                                <textarea class="textarea" v-model="data.review" required></textarea>
                            </div>
                        </div>

                        <div class="field" style="padding-top: 10px;">
                            <div class="control">
                                <TheButton class="btn-primary" :disabled="submitButton.disabled" @click.native="submit">
                                    <template v-if="submitButton.disabled">
                                        Отправляем...
                                    </template>
                                    <template v-else>
                                        Отправить
                                    </template>
                                </TheButton>
                            </div>
                            <div v-if="successMessage.show" style="margin-top: 10px;">
                                <b>Спасибо, мы получили Ваш отзыв!</b>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </template>
    </TheModal>
</template>

<script>
    export default {
        data() {
            return {
                data: {
                    restaurant: null,
                    email: null,
                    review: null,
                },
                successMessage: {
                    show: false
                },
                submitButton: {
                    disabled: false
                }
            }
        },
        methods: {
            submit() {
                this.submitButton.disabled = true
                this.$axios.post('/notifications/review', this.data)
                    .then((response) => {
                        this.submitButton.disabled = false
                        this.successMessage.show = true

                        let clear = () => {
                            this.data.restaurant = null
                            this.data.email = null
                            this.data.review = null
                            this.successMessage.show = false
                        }

                        setTimeout(() => {
                            clear()
                        }, 10000)
                    })
            }
        }
    }
</script>

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
