<template>
  <div ref="heroRef" class="hero-section page-full">
    <div class="hero-section__container container">
      <ScrollDownButton />

      <PrintX />
      
      <ProjectSelector />

      <VideoFile />

      <VideoText />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ScrollDownButton, PrintX, ProjectSelector, VideoText, VideoFile } from '@components/widgets';
</script>

<style lang="scss">
.hero-section {
  min-height: 100vh;
  height: 100%;
}

.hero__video-wrap {
  position: relative;
  will-change: transform;
}
</style>