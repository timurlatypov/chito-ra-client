<template>
    <TheModal name="menu-card">
        <template slot="body" slot-scope="{ params }">
            <div class="modal-content">
                <p class="image is-16by9">
                    <img :src="`http://api.test/${params.images[0].name}`" alt="">
                </p>
            </div>
            <div class="description">
                {{ params.description }}
            </div>
        </template>
    </TheModal>
</template>

<script>
    export default {

    }
</script>

