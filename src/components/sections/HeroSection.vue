<template>
  <div ref="heroRef" class="hero-section">
    <div class="hero-section__container container">
      <HeroSectionSearch ref="searchRef" />

      <ScrollDownButton />

      <PrintX />
      
      <ProjectSelector />

      <div ref="videoRef">
        <HeroSectionVideo />
      </div>

      <div ref="textRef">
        <HeroSectionText />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  ScrollDownButton,
  PrintX,
  ProjectSelector,
  HeroSectionText, 
  HeroSectionVideo,
  HeroSectionSearch
} from '@components/widgets';

import { useGsap } from '@libs/gsap'
import { onMounted, ref } from 'vue';

const { gsap } = useGsap()

const searchRef = ref(null)
const textRef = ref(null)
const videoRef = ref(null)
const heroRef = ref(null)

onMounted(() => {
  gsap.to(videoRef.value, {
    scrollTrigger: {
      trigger: heroRef.value,      // лучше ссылка, чем селектор
      start: 'top top',
      end: 'bottom',         // или end: () => '+=' + heroRef.value?.offsetHeight
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
    x: -700,
  })
})

</script>

<style lang="scss">
.hero-section {
  &__container {
    z-index: 2;
    position: relative;
    height: 100%;
    padding-bottom: 200px;
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