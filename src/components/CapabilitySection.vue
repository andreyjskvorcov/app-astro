<template>
  <div class="capability-section page-full">
    <div class="capability-section__container container">
      <h3 class="capability-section__title white">
        <i class="u-icon u-icon-arrow-down-right"></i>

        Возможности Print-X
      </h3>

      <div class="capability-section__image"></div>

      <div class="capability-section__items">
        <div 
          v-for="item in items"
          :key="item.num"
          class="capability-section__item"
        >
          <h3 class="green">{{ item.title }}</h3>

          <h4 class="green">{{ item.num }}</h4>

          <div class="capability-section__item-text">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  num: string,
  title: string,
  description: string
}

const items: Item[] = [
  {
    num: '01',
    title: 'Повышение производительности труда',
    description: 'Интеллектуальный рабочий процесс позволяет автоматически направлять ваши документы в заранее определённое место назначения с использованием метаданных'
  },
  // {
  //   num: '02',
  //   title: 'Отказоустойчивость печати',
  //   description: 'Используя функции автономного входа в систему, пользователи смогут распечатать задание даже при отсутствии связи с сервером. При возникновении проблем пользователь может распечатать свои документы на любом ближайшем исправном принтере'
  // },
  // {
  //   num: '03',
  //   title: 'Конфиденциальность и безопасность печати',
  //   description: 'Доступ к устройствам за один шаг с помощью ПИН-кода, ИД-карты или имени/пароля либо двухэтапная аутентификация.Шифрование данных и функция Print&Follow™ гарантирует, что получить доступ к вашим документам и распечатать их могут только авторизированные пользователи'
  // },
  // {
  //   num: '04',
  //   title: 'Контроль и мониторинг печати',
  //   description: 'Print-X хранит подробную статистику обо всех распечатанных, отсканированных и скопированных документах, а также затратах на печать, ассоциированных с пользователями, отделами или проектами'
  // },
  // {
  //   num: '05',
  //   title: 'Роуминг заданий',
  //   description: 'Необходимый функционал для сотрудников, постоянно перемещающихся между филиалами компании — задание автоматически помещается на соответствующий сайт-сервер в соответствии с местоположением сотрудника'
  // },
]
</script>

<style lang="scss">
.capability-section {
  padding: 50px 0;
  background-color: $color-dark-purple;

  &__title {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  &__image {
    background-image: url('../assets/images/capability-bg.webp');
    place-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 734px;
    height: 700px;
  }

  &__item {
    min-height: 370px;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(100px);
    border-radius: 15px;
    padding: 40px;
    max-width: 592px;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    h3 {
      max-width: 300px;
    }

    h4 {
      margin-left: auto;
    }

    &-text {
      margin-top: auto;
      color: $color-total-white;
    }
  }

  &__items {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    z-index: 3;
  }
}
</style>