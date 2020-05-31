<template>
  <div>
    <TheNavigation/>
    <TheDeliveryHeader/>
    <TheContent>

      <div class="text-center">
      <span class="icon is-cursor-pointer text-green-500">
        <i class="fas fa-check fa-lg" style="font-size: 5rem;"></i>
      </span>
        <h4>Мы получили ваш заказ!</h4>

        <p>Информация по заказу выслана Вам на почту.</p>
        <p class="pb-6">Ожидайте звонка менеджера для подтверждения заказа!</p>

        <nuxt-link :to="{ name: 'index' }"
                   class="transition duration-300 ease-in-out uppercase bg-gray-200 border border-gray-200 text-gray-700 hover:text-black px-4 py-2 text-sm font-bold rounded-full">
          <nobr>
          <span class="icon is-cursor-pointer">
            <i class="fas fa-arrow-left"></i>
          </span>&nbsp;Вернуться на сайт
          </nobr>
        </nuxt-link>
      </div>

    </TheContent>
    <TheFooter/>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: `Доставка Чито-ра`,
      }
    },
  }
</script>
