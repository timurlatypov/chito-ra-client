<template>
  <div class="grid absolute bottom-0 w-full
    grid-cols-16
    px-4 sm:p-0
    ">
    <div class="bg-white rounded-tr-large rounded-tl-large
      preheader
      col-start-1
      col-span-16
      sm:col-start-2
      sm:col-span-14
      md:col-start-2
      md:col-span-14
      lg:col-start-3
      lg:col-span-12
      p-4">
      <div class="h-6"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/styles/variables";

  .preheader {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 50px;
      width: 200px;
      background: $backgroung-ormanent-white no-repeat bottom;
      transform: translateX(50%) rotate(0deg);
      top: -49px;
      right: 50%;
    }
  }
</style>
