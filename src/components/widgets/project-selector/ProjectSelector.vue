<template>
  <div class="project-selector">
    <div class="project-selector__container">
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
      
      <div class="project-selector__navigations">

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

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
    max-width: 592px;
    border-radius: 15px;
    background: rgba($color-total-white, 0.8);
    display: flex;
    flex-direction: column;
  }

  &__container {
    display: flex;
    text-align: center;
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
}

</style>