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
  right: rem(40px);
  bottom: rem(40px);
  cursor: pointer;
  z-index: 4;

  @media ($media-2xl) {
    display: none;
  }

  &__container {
    display: flex;
    width: rem(280px);
    height: rem(150px);
    padding: rem(25px);
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: rem(15px);
    background-color: $color-dark-purple;
  }

  &__action {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: rem(24px);
    color: $color-total-white;
    text-transform: uppercase;
    width: 100%;
  }
}
</style>