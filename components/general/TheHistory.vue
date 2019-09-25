<template>
    <div class="history">
        <div class="history__content">
            <h4>Наша история</h4>
            Приходите к нам и заказывайте домашнюю грузинскую еду для себя, для друзей, свадьбы,
            корпоратива, детского праздника. Слепим для вас сколько угодно хинкали или зажарим сочный шашлык – хоть одну порцию, хоть несколько тысяч!
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

<style lang="scss">
    .history {
        position: relative;
        width: 100%;
        height: 400px;
        display: flex;
        justify-items: center;
        align-items: center;
        background-color: white;

        &:before {
            content: "";
            position: absolute;
            height: 50px;
            width: 70px;
            background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23f5f3f0' viewBox='0 0 21.1 30.4' style='enable-background:new 0 0 21.1 30.4;' xml:space='preserve'%3E%3Cg%3E%3Cellipse transform='matrix(0.9999 -1.386578e-02 1.386578e-02 0.9999 -0.3808 0.1495)' class='st0' cx='10.6' cy='27.5' rx='2.4' ry='2.4'/%3E%3Cpath class='st0' d='M10.6,20.4c0-6.6,4.6-10.1,10.1-8.4c0.4-3.7-4.1-6.8-7.6-2.2C15,3,10.6,0.5,10.6,0.5S6.1,3,8.1,9.7c-3.5-4.5-7.9-1.4-7.6,2.2C6,10.3,10.5,13.8,10.6,20.4z'/%3E%3C/g%3E%3C/svg%3E") no-repeat bottom;
            transform: translateX(50%);
            top: 30px;
            right: 50%;
        }

        &:after {
            content: "";
            position: absolute;
            height: 50px;
            width: 70px;
            background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23f5f3f0' viewBox='0 0 21.1 30.4' style='enable-background:new 0 0 21.1 30.4;' xml:space='preserve'%3E%3Cg%3E%3Cellipse transform='matrix(0.9999 -1.386578e-02 1.386578e-02 0.9999 -0.3808 0.1495)' class='st0' cx='10.6' cy='27.5' rx='2.4' ry='2.4'/%3E%3Cpath class='st0' d='M10.6,20.4c0-6.6,4.6-10.1,10.1-8.4c0.4-3.7-4.1-6.8-7.6-2.2C15,3,10.6,0.5,10.6,0.5S6.1,3,8.1,9.7c-3.5-4.5-7.9-1.4-7.6,2.2C6,10.3,10.5,13.8,10.6,20.4z'/%3E%3C/g%3E%3C/svg%3E") no-repeat bottom;
            transform: translateX(50%) rotate(180deg);
            bottom: 30px;
            right: 50%;
        }

        #{&}__content {
            position: relative;
            width: 60%;
            margin: 50px auto;
            text-align: center;
        }
    }
</style>