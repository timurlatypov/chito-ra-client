<template>
    <TheModal name="lesnaya-map" mMaxWidth="1000px">
        <template slot="body" slot-scope="{ params }">
            <yandex-map :coords="coords" @click="onClick" style="height: 500px;">
                <ymap-marker
                        :coords="coords"
                        :icon="markerIcon"/>
            </yandex-map>
        </template>
    </TheModal>
</template>

<script>
    export default {
        data() {
            return {
                coords: [55.78335, 37.596332],
                markerIcon: {
                    layout: 'default#imageWithContent',
                    imageHref: '/marker/chito-ra-marker.png',
                    imageSize: [70, 70],
                    imageOffset: [-35, -70],
                    content: '',
                }
            }
        },
    }
</script>

<style lang="scss">

</style>

