<template>
  <div class="print-x">
    <div class="print-x__container">
      <i class="u-icon u-icon-print-x"></i>

      <span class="print-x__action">
        Перейти на сайт <br />
        printx

        <i class="u-icon u-icon-arrow-up-right"></i>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.print-x {
  position: fixed;
  right: 40px;
  bottom: 40px;
  cursor: pointer;
  z-index: 4;

  &__container {
    display: flex;
    width: 280px;
    height: 150px;
    padding: 25px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 15px;
    background-color: $color-dark-purple;
  }

  &__action {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 24px;
    color: $color-total-white;
    text-transform: uppercase;
    width: 100%;
  }
}
</style>