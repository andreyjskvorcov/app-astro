<template>
  <section class="hero-section">
    <div class="hero-section__container container">
      <!-- <HeroSectionSearch ref="searchRef" />

      <ScrollDownButton />

      <PrintX />
      
      <ProjectSelector /> -->

     <HeroSectionVideo />

     <HeroSectionText /> 
    </div>
  </section>
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
import { useBreakpoints } from '@/composables';
import { useGsap } from '@libs/gsap'
import { onMounted } from 'vue';

const { gsap, SplitText, ScrollTrigger } = useGsap()

const { isMobile } = useBreakpoints()

onMounted(() => {

  // const heroTextSplit = new SplitText('.hero-section-text__title', { type: 'lines'})

  // const heroVideo = '.hero-section-video'

  // gsap.from(heroTextSplit.lines, {
  //   opacity: 0,
  //   yPercent: 100,
  //   duration: 1.8,
  //   ease: 'expo.out',
  //   stagger: 0.06,
  //   delay: 1
  // })

  // const startValue = isMobile.value ? 'top 50%' : 'center 50%'
  // const endValue = isMobile.value ? '120% top' : 'bottom top'
})



</script>

<style lang="scss">
.hero-section {
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 200px;
  
  &__container {
    z-index: 2;
    position: relative;
    height: 100%;
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