<template>
  <div class="hero-section-text">
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
  position: absolute;
  top: 400px;
  overflow: hidden;
  z-index: 1;
  opacity: 0;

  &__content {
    width: 748px;
    margin-left: auto;
    margin-right: 156px;
  }
  
  &__steps {
    margin: 70px 0 0 auto;
    gap: 32px;
    display: grid;
    grid-template-columns: $grid-cols-3;
    max-width: 904px;
    width: 100%;

    &-item {
      grid-column: $col-span-1;
      background: rgba($color-total-white, 0.8);
      backdrop-filter: blur(25px);
      border-radius: 15px;
      padding: 40px;
      min-height: 272px;
      display: flex;
      flex-direction: column;

      h4 {
        margin-top: auto;
      }
    }
  }
}
</style>