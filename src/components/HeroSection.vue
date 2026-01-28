<template>
  <div class="hero-section page-full">
    <div class="hero-section__container container">
    <!-- <ScrollDownButton client:only='vue' /> -->

      <!-- <PrintX client:only='vue' /> -->
      
      <!-- <ProjectSelector client:only='vue' /> -->

      <VideoTextBlock client:only='vue' />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ScrollDownButton, PrintX, ProjectSelector, VideoTextBlock } from '@components/widgets';
</script>

<style lang="scss">
.hero-section {
  min-height: 200vh;
}
</style>