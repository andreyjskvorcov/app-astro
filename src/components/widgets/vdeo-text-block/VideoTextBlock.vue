<template>
 <div class="vdeo-text-block">
    <div class="vdeo-text-block__file" ref="firstBlockRef"></div>
  </div>

  <div class="vdeo-text-block__text">
    <h1>
        Централизуем печать 
        на предприятиях 
        с помощью комплексного решения <div class="green">Print-X</div> для сокращения
        затрат, повышения эффективности 
        и безопасности процессов
    </h1>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.vdeo-text-block {
  position: relative;
  height: 100vh;
  z-index: 3;
  width: 100%;

  &__file {
    padding: 100px;
    background-image: url('../../../assets/images/images.jpg');
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
    height: 100vh;

    .green {
      color: $color-green;
    }
  }
}

</style>