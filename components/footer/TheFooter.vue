<template>
  <div>
    <BottomOrnamentLine :nowhite="nowhite"/>
    <div class="footer">
      <div class="footer__chito-ra-sign">
        <AppSign color="#fff"></AppSign>
      </div>
      <div class="footer__blocks">
        <div class="item center">
          <h4 class="white">Позвонить</h4>
          <div class="text-contacts">
            <a class="tel" href="tel:+74994447474">+7 (499) 444-74-74</a>
          </div>
        </div>
        <div class="item">
          <TheReviewForm/>
          <TheSocialList/>
        </div>
        <div class="item center">
          <h4 class="white">Сотрудничество</h4>
          <div class="text-contacts">
            <a href="mailto:snab@chito-ra.ru">snab@chito-ra.ru</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      nowhite: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss">
  @import "../../assets/styles/variables";
  @import "../../assets/styles/_media.scss";

  .prefooter {
    position: relative;

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

  .footer {
    padding-top: 1rem;
    background-color: #282b32;
    min-height: 300px;

    &__chito-ra-sign {
      width: 50px;
      margin: 2rem auto 0 auto;
    }

    &__chito-ra-logo {
      width: 130px;
      margin: 1.3rem auto 2rem auto;
    }

    &__blocks {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-column-gap: 0;
      grid-row-gap: 0;
      align-items: stretch;

      @include media(sm) {
        grid-template-columns: repeat(1, 1fr);
      }
      @include media(md) {
        grid-template-columns: repeat(3, 1fr);
      }

      .item {
        padding: 20px 0;
      }

      .item:nth-of-type(1) {
        order: 1;

        @include media(sm) {
          order: 1;
        }
      }

      .item:nth-of-type(2) {
        order: 3;
        @include media(sm) {
          order: 2;
        }
      }

      .item:nth-of-type(3) {
        order: 2;
        @include media(sm) {
          order: 3;
        }
      }

      .center {
        text-align: center;
      }

      h4 {
        margin-bottom: 10px;
        font-weight: normal;
        color: white;
      }

      .text-contacts {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 26px;
        color: white;

        a {
          color: white;
          text-transform: lowercase;
          text-decoration: underline;

          &.tel {
            text-decoration: none;
          }
        }
      }
    }

  }
</style>
