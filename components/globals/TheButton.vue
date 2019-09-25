<template>
    <button v-if="!href" :type="type" class="btn" :class="className" :disabled="disabled !== false">
        <slot></slot>
    </button>
    <a v-else-if="href" :href="href" :type="type" class="btn" :class="className" :disabled="disabled !== false">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        props: {
            href: {
                type: String
            },
            className: {
                type: String,
                default: ''
            },
            type: {
                type: String,
                default: 'button'
            },
            disabled: {
                type: Boolean
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../../assets/styles/_media.scss';
    @import "../../assets/styles/variables";

    .btn {
        display: inline-block;
        padding: 20px 20px;
        font: $family-sans-serif;
        font-weight: 700;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        border: none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        outline: none;
        user-select: none;
        transition: all 0.3s ease;

        @include media(lg) {
            font-size: 15px;
            line-height: 19px;
        }
        @include media(xl) {
            padding: 15px 25px;
        }

        &:hover {
            box-shadow: none;
        }

        &.btn-primary {
            color: white;
            background-color: $bg-color-1;
            &:focus,
            &:hover {
                background-color: $bg-color-2;
            }
        }

        &--2 {
            color: #fff;
            background-color: $color-3;
            &:focus,
            &:hover {
                background-color: $color-1;
            }
        }

        &--3 {
            color: #fff;
            background: #3D3BFF;
            border-radius: 51px;
            &:focus,
            &:hover {
                background-color: $color-3;
            }
        }

        &:disabled {
            opacity: 0.5;
            cursor: default;
            pointer-events: none;
        }

        .loading {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .loading-bar {
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 100%;
            margin: 2px;
            animation: loading 1s ease-in-out infinite;
        }
        .loading-bar:nth-child(1) {
            background-color: #FFFFFF;
            animation-delay: 0s;
        }
        .loading-bar:nth-child(2) {
            background-color: #FFFFFF;
            animation-delay: 0.09s;
        }
        .loading-bar:nth-child(3) {
            background-color: #FFFFFF;
            animation-delay: .18s;
        }
        @keyframes loading {
            0% {
                transform: scale(1);
            }
            20% {
                transform: scale(1.5);
            }
            40% {
                transform: scale(1);
            }
        }
    }

</style>
