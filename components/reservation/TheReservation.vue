<template>
    <div class="reserve">
        <div class="reserve--item-1">1</div>
        <div class="reserve--item-2">
            <div class="reserve--item__block">
                2
            </div>
            <div class="reserve--item-2__bottom-ornament"></div>
        </div>
        <div class="reserve--item-3">3</div>
    </div>
</template>

<style lang="scss">
    @import "../../assets/styles/variables";

    .reserve {
        position: relative;
        background-color: #f5f3f0;
        min-height: 450px;
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
    }

    .reserve:after {
        content: "";
        position: absolute;
        height: 50px;
        width: 200px;
        background: $backgroung-ormanent-white no-repeat bottom;
        transform: translateX(50%);
        bottom: 0;
        right: 50%;
    }

    .reserve--item-1 {
        text-align: center;
        order: 1;
    }
    .reserve--item-2 {
        order: 0;
        max-width: 450px;
        width: 80%;
        height: 500px;
        position: relative;
    }
    .reserve--item-3 {
        text-align: center;
        order: 2;
    }

    .reserve--item__block {
        position: relative;
        text-align: center;
        background-color: white;
        width: 100%;
        height: 300px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .reserve--item__block:after {
        content: "";
        position: absolute;
        height: 50px;
        width: 200px;
        background: $backgroung-ormanent-white no-repeat bottom;
        transform: translateX(50%) rotate(180deg);
        bottom: -50px;
        right: 50%;
    }

    @media (min-width: 1088px) {
        .reserve {
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
        }
        .reserve--item-1 {
            order: 0;
            align-self: flex-end;
            width: 30vw;
        }
        .reserve--item-2 {
            order: 1;
            height: 500px;

        }
        .reserve--item-3 {
            order: 2;
            align-self: flex-end;
            width: 30vw;
        }
    }
</style>