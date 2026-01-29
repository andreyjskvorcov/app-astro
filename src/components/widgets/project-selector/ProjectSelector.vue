<template>
  <div class="project-selector">
    <div class="project-selector__container">
      <PButton class="project-selector__navigation-left">
        <i class="u-icon u-icon-arrow-left"></i>
      </PButton>

      <div class="project-selector__content">
        <div class="project-selector__title">
          <span>Инновации</span>

          <h3 class="green">Управление корпоративной печатью</h3>
        </div>

        <div class="project-selector__separator"></div>

        <div class="project-selector__description">
          Централизация печати в организациях с помощью комплексного программного решения
        </div>
      </div>
      
      <PButton class="project-selector__navigation-right">
         <i class="u-icon u-icon-arrow-right"></i>
      </PButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PButton } from '@/components/ui';
</script>

<style lang="scss">
.project-selector {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translate(-50%);
  z-index: 4;

  &__content {
    backdrop-filter: blur(12.5px);
    padding: 30px 0;
    width: 592px;
    border-radius: 15px;
    background: rgba($color-total-white, 0.8);
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__container {
    display: flex;
    align-items: flex-end;
    gap: 32px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    padding: 0 32px;
    text-transform: uppercase;
    gap: 10px;
    
    h3 {
      text-transform: none;
    }
  }

  &__separator {
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      $color-black 50%,
      transparent 0
    );
    background-size: 8px 2px;
    background-repeat: repeat-x;
    margin: 30px 0;
  }

  &__description {
    padding: 0 32px;
  }

  &__navigation-left,
  &__navigation-right {
    width: 64px;
  }
}

</style>