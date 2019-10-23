<template>
    <div class="delivery-blocks">
        <div class="item-1"></div>
        <div class="item-2">
            <div class="base-layout">
                <div class="centered" id="top">
                    <div class="centered__inner">
                        <TheDeliveryTabs>
                            <TheTab v-for="(category, index) in data[0].children" :key="index" :products="category.products" :name="category.name" :slug="category.slug" />
                            <TheTab :products="payload" name="Напитки" slug="drinks" />
                        </TheDeliveryTabs>
                    </div>
                </div>
            </div>
        </div>
        <div class="item-3"></div>
    </div>
</template>

<script>
    export default {
        props: {
            data: {
                required: true,
                type: Array
            }
        },
        data() {
            return {
                payload: [
                    {
                        "id": 133,
                        "name": "КОКА-КОЛА",
                        "description": null,
                        "slug": "koka-kola",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 119,
                                    "name": "250",
                                    "price": "120,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 133,
                                        "name": "КОКА-КОЛА",
                                        "description": null,
                                        "slug": "koka-kola",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/qWSDdkQ1xVDUOIr1uT4NMq2BKtwqjRMKrUNXsbQV.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 134,
                        "name": "ФАНТА",
                        "description": null,
                        "slug": "fanta",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 120,
                                    "name": "250 мл",
                                    "price": "120,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 134,
                                        "name": "ФАНТА",
                                        "description": null,
                                        "slug": "fanta",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/HcFixcU528o3F0OuKwr5vE4GEjdimVj2t9ife9WM.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 135,
                        "name": "СПРАЙТ",
                        "description": null,
                        "slug": "sprite",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 121,
                                    "name": "250 мл",
                                    "price": "120,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 135,
                                        "name": "СПРАЙТ",
                                        "description": null,
                                        "slug": "sprite",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/W1UczvEXxmqrwffYCZn2KjEMsZunvc6BGosGTnBM.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 136,
                        "name": "НАТАХТАРИ ЛИМОНАД",
                        "description": null,
                        "slug": "natahtari-limonad",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 122,
                                    "name": "500 мл",
                                    "price": "140,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 136,
                                        "name": "НАТАХТАРИ ЛИМОНАД",
                                        "description": null,
                                        "slug": "natahtari-limonad",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/guoLxAvMSiHmMJ6yRdBmWcaAJkWJmRGmqWA1xR7S.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 137,
                        "name": "ДОМАШНИЙ ЯГОДНЫЙ МОРС",
                        "description": null,
                        "slug": "domashnii-yagodnyi-mors",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 123,
                                    "name": "300 мл",
                                    "price": "100,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 137,
                                        "name": "ДОМАШНИЙ ЯГОДНЫЙ МОРС",
                                        "description": null,
                                        "slug": "domashnii-yagodnyi-mors",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/N29b9NDWkRfmKGqcxkDpVxxpfKpOzyGzQRWtZgHi.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 138,
                        "name": "ВОДА МИНЕРАЛЬНАЯ БОРЖОМИ",
                        "description": null,
                        "slug": "voda-mineralnaya-borzhomi",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 124,
                                    "name": "500 мл",
                                    "price": "150,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 138,
                                        "name": "ВОДА МИНЕРАЛЬНАЯ БОРЖОМИ",
                                        "description": null,
                                        "slug": "voda-mineralnaya-borzhomi",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/D5era4RbE0jBUusHy3whigt7FOBUtQlRO6i8Czs0.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 139,
                        "name": "ВОДА МИНЕРАЛЬНАЯ САИРМЕ",
                        "description": null,
                        "slug": "voda-mineralnaya-sairme",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 125,
                                    "name": "500 мл",
                                    "price": "140,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 139,
                                        "name": "ВОДА МИНЕРАЛЬНАЯ САИРМЕ",
                                        "description": null,
                                        "slug": "voda-mineralnaya-sairme",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/zUKpcvVuZ8uPsTIpT3tn77BXTItpnEFV9EZbdbj6.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 140,
                        "name": "ШВЕПС ТОНИК",
                        "description": null,
                        "slug": "shveps-tonik",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 126,
                                    "name": "250 мл",
                                    "price": "150,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 140,
                                        "name": "ШВЕПС ТОНИК",
                                        "description": null,
                                        "slug": "shveps-tonik",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/2o2cNaYmnBvFTbWUCQie11GADLBqMhZFzO3d56CF.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            15
                        ]
                    },
                    {
                        "id": 141,
                        "name": "Яблочный сок",
                        "description": null,
                        "slug": "apple-juice",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 127,
                                    "name": "1000 мл",
                                    "price": "375,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 141,
                                        "name": "Яблочный сок",
                                        "description": null,
                                        "slug": "apple-juice",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/oFVqx211nfrlxAuu5zxAVHo2QBGxQRNWJ8p2V7S1.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            16
                        ]
                    },
                    {
                        "id": 142,
                        "name": "Вишневый сок",
                        "description": null,
                        "slug": "cherry-juice",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 128,
                                    "name": "1000 мл",
                                    "price": "375,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 142,
                                        "name": "Вишневый сок",
                                        "description": null,
                                        "slug": "cherry-juice",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/IAZ8SffujMWVyxHQBtM4vFtFszTZW6i3jbEso8xR.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            16
                        ]
                    },
                    {
                        "id": 143,
                        "name": "Томатный сок",
                        "description": null,
                        "slug": "tomato-juice",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 129,
                                    "name": "1000 мл",
                                    "price": "375,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 143,
                                        "name": "Томатный сок",
                                        "description": null,
                                        "slug": "tomato-juice",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/7bn8290mSoB72SN7f5b9t3TuZgeAwiyZsUTOPiC1.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            16
                        ]
                    },
                    {
                        "id": 144,
                        "name": "Апельсиновый сок",
                        "description": null,
                        "slug": "orange-juice",
                        "live": false,
                        "deliverable": true,
                        "spicy": false,
                        "top": false,
                        "price": "0,00 ₽",
                        "in_stock": false,
                        "variations": {
                            "Порция": [
                                {
                                    "id": 130,
                                    "name": "1000 мл",
                                    "price": "375,00 ₽",
                                    "price_varies": true,
                                    "stock_count": 0,
                                    "type": "Порция",
                                    "in_stock": false,
                                    "product": {
                                        "id": 144,
                                        "name": "Апельсиновый сок",
                                        "description": null,
                                        "slug": "orange-juice",
                                        "live": false,
                                        "deliverable": true,
                                        "spicy": false,
                                        "top": false,
                                        "price": "0,00 ₽",
                                        "in_stock": false
                                    }
                                }
                            ]
                        },
                        "images": [
                            {
                                "name": "images/aRRSh03ufFzY2p2sENTSDHjuOQm6pb7cWhRPlqh4.jpeg",
                                "alt": ""
                            }
                        ],
                        "categories": [
                            16
                        ]
                    }
                ],
            }
        },
        asyncData (context, {app}) {
            console.log(context);
            console.log(app);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/styles/variables";
    @import "../../assets/styles/_media.scss";

    .delivery-blocks {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-column-gap: 0;
        grid-row-gap: 0;
        align-items: stretch;
        justify-content: center;
        background-color: $bg-color-3;
        margin: -50px 0 -50px 0;
        padding: 0 15px;

        @include media(sm) {
            grid-template-columns: repeat(3, 1fr);
            padding: 0;
        }
        @include media(md) {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    .item-1 {
        display: none;
        width: 100%;
        order: 1;

        @include media(sm) {
            display: block;
        }
    }

    .item-2 {
        position: relative;
        order: 2;
        background-color: white;
        text-align: center;
        border-radius: 25px;

            &::after {
                content: '';
                position: absolute;
                height: 50px;
                width: 200px;
                background: $backgroung-ormanent-white no-repeat bottom;
                transform: translateX(50%);
                top: -49px;
                right: 50%;
            }

            &::before {
                content: '';
                position: absolute;
                height: 50px;
                width: 200px;
                background: $backgroung-ormanent-white no-repeat bottom;
                transform: translateX(50%) rotate(180deg);
                bottom: -49px;
                right: 50%;
            }
        }

    .item-3 {
        display: none;
        width: 100%;
        order: 3;

        @include media(sm) {
            display: block;
        }
    }
</style>