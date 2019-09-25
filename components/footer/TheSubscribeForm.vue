<template>
    <div class="register">
        <h4 class="white">Горячие новости!</h4>
        <div class="field">
            <input type="text" maxlength="21" id="register">
            <label for="register"><span>Ваш email</span></label>
            <button>Подписаться</button>
        </div>
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

    .register {
        margin: 0 auto 0;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .field {
        width: 385px;
        height: 50px;
        position: relative;
        input {
            width: 100%;
            border-radius: 50px;
            height: 50px;
            border: 1px solid #5c5e63;
            padding: 0 0 0 25px;
            font-size: 0;
            background: #282b32;
            transition: background .3s ease;
            color: white;

            &:focus {
                background: #282b32;
                font-size: 16px;

                &::selection {
                    background: #282b32;
                }
            }
            &.active {
                background: #282b32;
                font-size: 23px;
            }
        }

        input,
        button {
            position: absolute;
            height: 50px;
        }
        button {
            background: rgba(0, 0, 0, 0);
            right: 0;
            border: 1px solid #b36f54;
            border-top-left-radius: 0;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 50px;
            min-width: 115px;
            font-size: 16px;
            padding: 0 20px;
            cursor: pointer;
            transition:
                    width .3s ease,
                    background .3s ease,
                    opacity .3s ease;
            opacity: 0;
            color: white;
            pointer-events: none;
            &.active {
                color: #ffffff;
                background: #639EDB;
                opacity: 1;
                pointer-events: auto;
                &:hover {
                    background: #5E99D6;
                }
            }
            &.full {
                width: 100%;
            }
        }
        input:focus + label {
            font-size: 8px;
            transform: translate(25px, 6px);
        }
        label {
            position: absolute;
            color: #5c5e63;
            transform: translate(25px, 12px);
            transition:
                    transform .3s ease,
                    font-size .3s ease,
                    color .3s .1s ease;
            font-size: 16px;
            &.active {
                font-size: 16px;
                transform: translate(25px, 13px);
                color: rgba(255, 255, 255, 0.7);
            }
        }
        input:focus + label + button {
            opacity: 1;
        }
    }
</style>