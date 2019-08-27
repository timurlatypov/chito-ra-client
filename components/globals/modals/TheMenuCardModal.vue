<template>
    <TheModal name="menu-card">
        <template slot="body" slot-scope="{ params }">
            <div class="modal-content">
                <p class="image is-16by9">
                    <img :src="`http://api.test/${params.images[0].name}`" alt="">
                </p>
            </div>
            <!--<pre>{{ params }}</pre>-->
            <button class="c-btn c-btn--success" @click.prevent="$modal.hide('menu-card')">Ок</button>
        </template>
    </TheModal>
</template>

<script>
    import TheModal from '@/components/globals/TheModal'

    export default {
        components: {
            TheModal
        },
        data() {
            return {

            }
        },
    }
</script>