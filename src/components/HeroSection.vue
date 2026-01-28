<template>
  <div class="hero-section">
    <!-- <ScrollDownButton client:only='vue' /> -->

    <!-- <PrintX client:only='vue' /> -->
    
    <!-- <ProjectSelector client:only='vue' /> -->

    <VideoTextBlock client:only='vue' />
  </div>
</template>

<script setup lang="ts">
import { ScrollDownButton, PrintX, ProjectSelector, VideoTextBlock } from '@components/widgets';
</script>

<style lang="scss">
.hero-section {
  width: 100%;
  min-height: 200vh;
  position: relative;
  overflow: hidden;
}
</style>