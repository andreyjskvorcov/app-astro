<template>
  <div class="scroll-down-button">
    <i class="u-icon u-icon-mouse"></i>

    <span class="scroll-down-button__text">
      листайте вниз
    </span>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.scroll-down-button {
  position: fixed;
  bottom: 40px;
  left: 34px;
  display: flex;
  gap: 15px;
  align-items: center;
  text-transform: uppercase;
  z-index: 4;
}
</style>