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
  position: absolute;
  bottom: rem(40px);
  left: 50%;
  transform: translate(-50%);
  z-index: 4;

  @media ($media-md) {
    width: calc(100% - 16px);
  }

  &__content {
    backdrop-filter: blur(rem(12.5px));
    -webkit-backdrop-filter: blur(rem(12.5px));
    padding: rem(30px) 0;
    max-width: rem(592px);
    border-radius: rem(15px);
    background: rgba($color-total-white, 0.8);
    display: flex;
    flex-direction: column;
    text-align: center;
    overflow: hidden;
    transition: $transition3;
    width: 100%;

    @media ($media-md) {
      order: -1;
      grid-column: $col-span-2;
    }
  }

  &__container {
    display: flex;
    align-items: flex-end;
    gap: rem(32px);
    width: max-content;
    
    @media ($media-md) {
      width: auto;
      display: grid;
      grid-template-columns: $grid-cols-2;
      gap: rem(9px);
    }
  }

  &__title {
    display: flex;
    flex-direction: column;
    padding: 0 rem(32px);
    text-transform: uppercase;
    gap: rem(10px);
    
    span {
      transition: $transition3;
    }
    
    h3 {
      text-transform: none;
      transition: $transition3;
    }
  }

  &__separator {
    width: 100%;
    height: 1px; // ← оставляем hairline
    background-image: linear-gradient(
      to right,
      $color-black 50%,
      transparent 0
    );
    background-size: rem(8px) rem(2px);
    background-repeat: repeat-x;
    margin: rem(30px) 0;
    transition: $transition3;
  }

  &__description {
    padding: 0 rem(32px);
    transition: $transition3;
  }

  &__navigation-left,
  &__navigation-right {
    width: rem(64px);

    @media ($media-md) {
      width: 100%;
      grid-column: $col-span-1;
    }
  }

  &.is-collapsed {
    .project-selector__title {
      span {
        position: absolute;
        transform: translateX(rem(-300px));
        opacity: 0;
      }

      h3 {
        font-size: rem(19px);
        line-height: rem(24px);
      }
    }

    .project-selector__description,
    .project-selector__separator {
      position: absolute;
      transform: translateX(rem(300px));
      opacity: 0;
    }

    .project-selector__content {
      padding: rem(20px) rem(40px);
    }
  }
}
</style>