<template>
  <div class="grid
    grid-cols-16
    px-4 sm:p-0
    bg-sand">
    <div class="bg-white
      col-start-1
      col-span-16
      sm:col-start-2
      sm:col-span-14
      md:col-start-2
      md:col-span-14
      lg:col-start-3
      lg:col-span-12
      p-4">
      <slot/>
    </div>
  </div>
</template>
