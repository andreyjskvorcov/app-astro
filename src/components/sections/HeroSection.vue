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

</style>