<template>
    <div v-if="visible">
        <div class="app-modal" @click.prevent="$modal.hide(name)"></div>
        <div class="app-modal-inner">
            <div class="c-modal__content">
                <div class="c-modal__body">
                    <span class="c-modal__close" @click.prevent="$modal.hide(name)">
                        <i class="fa fa-times"></i>
                    </span>
                    <slot name="body" :params="params" />
                </div>
            </div>
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

<style>
    .app-modal {
        background-color: rgba(255,255,255, 0.9);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        overflow: hidden;
    }

    .app-modal-inner {
        position: fixed;
        top: 50%;
        left: 50%;
        border-radius: 4px;
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 90%;
        max-width: 700px;
        z-index: 100;
    }
</style>