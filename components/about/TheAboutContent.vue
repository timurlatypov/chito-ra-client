<template>
  <TheContent>
    <div class="px-2 py-2 sm:px-12 sm:py-4 text-navi text-base md:text-lg">
      <h3 class="text-center pb-6">О нас</h3>
      <p class="pb-6">Классика и гордость грузинской кухни — хинкали! И мы счастливы быть теми, кто в 2002 году привез
        культ
        Хинкальных
        в Москву! Мы были первые, кто дал распробовать москвичу незабываемый вкус традиционных грузинских хинкали!</p>
      <p class="pb-6">По сей день, спустя много лет мы не следуем гастрономическим трендам, не гонимся за модными
        интерьерами,
        Чито-Ра
        – это про еду. Про вкусную грузинскую еду, с трепетом приготовленную лучшими грузинскими поварами по самым
        аутентичным рецептурам. Мы фанатично и кропотливо следуем уникальным вкусам домашней еды и отдаем предпочтение
        тщательному отбору продуктов, чтобы передать гостям хоть чуточку души настоящего грузинского стола.</p>
      <p class="pb-6">Меню Чито-Ра – это полноценное погружение в гастрономическую историю Грузии. Около сотни блюд –
        лобио и пхали,
        сациви и цыплёнок табака, чихиртма и хачапури в лучших традициях и в современной подаче удовлетворит любой
        запрос
        дорогого гостя. Меню Чито-Ра — это еда долгожителей, она здоровая и полезная, это - еда для всех!</p>
      <p class="pb-6">Мы глубоко чтим семейные традиции и любим шумные застолья! А наши хинкали по-прежнему самые
        вкусные в
        столице!</p>
    </div>
  </TheContent>
</template>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";
  @import "../../assets/styles/_media.scss";

  .about-blocks {
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

    &__title {
      font-family: 'PT Serif', serif;
      font-weight: 700;
      text-align: center;
      color: $color-3;
      font-size: 36px;
      line-height: 110%;
      padding: 0 0 50px 0;
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
    padding: 50px 0;
    min-width: 70vw;

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
