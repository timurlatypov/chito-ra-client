<template>
    <TheModal name="kazakova-map" mMaxWidth="1000px">
        <template slot="body" slot-scope="{ params }">
            <GmapMap
                    :options="{
                       zoomControl: true,
                       mapTypeControl: false,
                       scaleControl: false,
                       streetViewControl: false,
                       rotateControl: false,
                       fullscreenControl: true,
                       disableDefaultUi: false,
                       styles:styles
                     }"
                    :center="{ lat: 55.7623095, lng: 37.6628655, }"
                    :zoom="17"
                    map-type-id="terrain"
                    style="width: 100%; height: 400px">

                <GmapMarker v-for="(m, index) in markers"
                            :key="index"
                            :position="m.position"
                            :title="m.title"
                            :icon="m.icon"
                            :shape="m.shape"
                            :clickable="true"
                            :draggable="false"
                            @click="center=m.position" />
            </GmapMap>
        </template>
    </TheModal>
</template>

<script>
    export default {
        data() {
            return {
                markers: [
                    {
                        position: {
                            lat: 55.7623095,
                            lng: 37.6628655,

                        },
                        icon: {
                            url: "/marker/chito-ra-marker.png",
                            // size: {width: 200, height: 200, f: 'px', b: 'px'},
                            scaledSize: {width: 65, height: 65, f: 'px', b: 'px'}
                        },
                        shape: {
                            coords: [1, 1, 1, 20, 18, 20, 18, 1],
                            type: 'poly'
                        }
                    },
                ],
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "on"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#dbdbdb"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
            }
        },
    }
</script>