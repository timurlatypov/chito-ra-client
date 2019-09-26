<template>
    <div v-if="visible">
        <div class="app-modal" @click.prevent="$modal.hide(name)"></div>
        <div class="app-modal__inner">
            <div class="app-modal__close" @click.prevent="$modal.hide(name)"></div>
            <slot name="body" :params="params" />
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                params: {},
                visible: false
            }
        },
        props: {
            name: {
                required: true,
                type: String
            }
        },
        methods:{
            setVisible() {
                this.visible = true
                document.body.classList.add('overflow-hidden')
            },
            setHidden() {
                this.visible = false
                document.body.classList.remove('overflow-hidden')
            }
        },
        beforeMount () {
            this.$modal.$event.$on('show', (modal, params) => {
                if (this.name === modal) {
                    this.params = params

                    if (!this.$listeners['before-open']) {
                        this.setVisible()
                        return
                    }

                    this.$emit('before-open', () => {
                        this.setVisible()
                    })
                }
            })

            this.$modal.$event.$on('hide', (modal) => {
                if (this.name === modal) {
                    this.setHidden()
                }
            })

        },
        mounted(){
            document.addEventListener('keydown', (e) => {
                if (this.visible && e.keyCode === 27) {
                    this.visible = false
                }
            })
        }
    }
</script>

<style lang="scss">
    .app-modal {
        background-color: rgba(0,0,0, 0.9);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        overflow: hidden;

        &__close {
            position: absolute;
            top: -25px;
            right: -25px;
            color: white;
            background-color: black;
            width: 50px;
            height: 50px;
            -webkit-border-radius: 50px;
            -moz-border-radius: 50px;
            border-radius: 50px;

            &:after {
                content: '';
                position: absolute;
                width: 25px;
                height: 3px;
                background-color: white;
                -webkit-border-radius: 50px;
                -moz-border-radius: 50px;
                border-radius: 50px;
                top: 23px;
                left: 13px;
                transform: rotate(45deg);
            }
            &:before {
                content: '';
                position: absolute;
                width: 25px;
                height: 3px;
                background-color: white;
                -webkit-border-radius: 50px;
                -moz-border-radius: 50px;
                border-radius: 50px;
                top: 23px;
                left: 13px;
                transform: rotate(135deg);
            }
        }

        &__inner {
             position: fixed;
             top: 50%;
             left: 50%;
             border-radius: 4px;
             transform: translate(-50%, -50%);
             //background-color: #fff;
             width: 90%;
             max-width: 800px;
             z-index: 100;
         }

    }


</style>