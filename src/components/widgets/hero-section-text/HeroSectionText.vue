<template>
  <div class="hero-section-text container">
    <div class="hero-section-text__content">
     <h1 class="hero-section-text__title">
        Централизуем печать 
        на предприятиях 
        с помощью комплексного решения 
        <div class="green">Print-X</div> 
        для сокращения затрат, повышения эффективности 
        и безопасности процессов
      </h1>
    </div>

    <div class="hero-section-text__steps">
      <div 
        v-for="item in items"
        :key="item.title"
        class="hero-section-text__steps-item"
      >
        <div class="green">{{ item.title }}</div>

        <h4>{{ item.description }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  title: string,
  description: string
}

const items: Item[] = [
  {
    title: '01',
    description: 'Продвинутое управление печатью, копированием и сканированием'
  },
  {
    title: '02',
    description: 'Удобное администрирование пользователей и оборудования'
  },
  {
    title: '03',
    description: 'Прозрачная отчетность по всей компании и каждому подразделению'
  },
  {
    title: '04',
    description: 'Высокий уровень защищенности данных'
  },
  {
    title: '05',
    description: 'Легкость интеграции и обучения'
  },
]

import { onMounted } from 'vue';

onMounted(() => {
});
</script>

<style lang="scss">
.hero-section-text {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-top: 100vh;
  z-index: 1;
  opacity: 0;
  top: rem(900px);

  &__content {
    max-width: rem(748px);
    margin-left: auto;
    margin-right: rem(156px);
    width: 100%;
  }
  
  &__steps {
    margin: rem(150px) 0 0 auto;
    gap: rem(32px);
    display: grid;
    grid-template-columns: $grid-cols-3;
    max-width: rem(904px);
    width: 100%;

    @media ($media-md) {
      margin: rem(42px) 0 0 auto;
      grid-template-columns: $grid-cols-2;
      gap: rem(9px);
    }

    &-item {
      grid-column: $col-span-1;
      background: rgba($color-total-white, 0.8);
      backdrop-filter: blur(rem(25px));
      -webkit-backdrop-filter: blur(rem(25px));
      border-radius: rem(15px);
      padding: rem(40px);
      min-height: rem(272px);
      display: flex;
      flex-direction: column;

      @media ($media-md) {
        min-height: rem(200px);
        padding: rem(18px);
      }

      h4 {
        margin-top: auto;
      }
    }
  }
}
</style>
