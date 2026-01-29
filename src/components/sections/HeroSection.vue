<template>
  <div ref="heroRef" class="hero-section page-full">
    <div class="hero-section__container container">
      <ScrollDownButton />

      <PrintX />
      
      <ProjectSelector />

      <HeroSectionVideo />

      <HeroSectionText />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ScrollDownButton, PrintX, ProjectSelector, HeroSectionText, HeroSectionVideo } from '@components/widgets';
</script>

<style lang="scss">
.hero-section {
  &__container {
    z-index: 2;
    position: relative;
  }

  &::before {
    content: '';
    position: absolute;
    width: 1000px;
    height: 1000px;
    top: -500px;
    left: -500px;
    background-color: $color-dark-purple-second;
    border-radius: 50%;
    filter: blur(100px);
    z-index: 1;
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    width: 1000px;
    height: 1000px;
    top: 50%;
    transform: translateY(-50%);
    right: -700px;
    background-color: $color-green;
    border-radius: 50%;
    filter: blur(100px);
    z-index: 1;
    opacity: 0.30;
  }
}
</style>