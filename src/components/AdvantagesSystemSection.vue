<template>
  <div class="advantages-system-section page-full">
    <div class="advantages-system-section__container container">
      <h3 class="advantages-system-section__title">
        <i class="u-icon u-icon-arrow-down-right"></i>

        Преимущества системы
      </h3>

      <div class="advantages-system-section__items">
        <div 
          v-for="item in items"
          :key="item.num"
          class="advantages-system-section__item"
        >
          <h1 class="green">
            {{ item.title }}
          
            <sup class="black">{{ item.num }}</sup>
          </h1>

          <h3>
            {{ item.description }}
          </h3>
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
    title: 'Система уровня Enterprise',
    description: 'Обеспечивает полный функционал системы управления печатью'
  },
  {
    num: '02',
    title: 'Мультивендорность',
    description: 'Встроенные программные терминалы для большинства производителей МФУ'
  },
  {
    num: '03',
    title: 'Отечественный продукт',
    description: 'Входит в реестр российского ПО, сертифицирована ФСТЭК'
  },
  {
    num: '04',
    title: 'Гибкая и глубокая интеграция',
    description: 'Возможность развивать и дорабатывать продукт по потребности заказчика'
  },
]
</script>

<style lang="scss">
.advantages-system-section {
  padding: 50px 0;

  &__title {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 60px 0;
    position: relative;

    &:last-child {
    &::after {
      content: '';
      height: 1px;
      width: 100%;
      background-image: linear-gradient(
        to right,
        $color-black 50%,
        transparent 0
      );
      background-size: 8px 2px;
      background-repeat: repeat-x;
      margin: 30px 0;
      position: absolute;
      left: 0;
      bottom: 0;
    }
    }

    &::before {
      content: '';
      height: 1px;
      width: 100%;
      background-image: linear-gradient(
        to right,
        $color-black 50%,
        transparent 0
      );
      background-size: 8px 2px;
      background-repeat: repeat-x;
      position: absolute;
      left: 0;
      top: 0;
    }

    h1 {
      display: flex;
    }

    h3 {
      max-width: 436px;
      width: 100%;
      margin-left: auto;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
  }
}
</style>