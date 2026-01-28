<template>
  <div class="video-text-block">
    <div ref="firstBlockRef" class="video-text-block__file"></div>

    <div class="video-text-block__text">
      <h1>
          Централизуем печать 
          на предприятиях 
          с помощью комплексного решения <div class="green">Print-X</div> для сокращения
          затрат, повышения эффективности 
          и безопасности процессов
      </h1>
    </div>

    <div class="video-text-block__steps">
      <div 
        v-for="item in items"
        :key="item.title"
        class="video-text-block__steps-item"
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
</script>

<style lang="scss">
.video-text-block {
  position: relative;
  z-index: 3;
  width: 100%;

  &__file {
    padding: 100px;
    background-image: url('../../../assets/images/hero-bg.webp');
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }

  &__text {
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