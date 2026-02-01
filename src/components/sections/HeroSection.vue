<template>
  <section class="hero-section">
    <div class="hero-section__container container">
      <HeroSectionSearch ref="searchRef" />

      <ScrollDownButton />

      <PrintX />
        
      <ProjectSelector :is-collapsed="projectSelectorCollapsed" />

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
import { onMounted, ref } from 'vue';

const { gsap, SplitText, ScrollTrigger } = useGsap()

const { isMobile } = useBreakpoints()

const projectSelectorCollapsed = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const heroTextSplit = new SplitText('.hero-section-text__title', { type: 'lines'})

  gsap.from(heroTextSplit.lines, {
    opacity: 0,
    yPercent: 100,
    duration: 1.8,
    ease: 'expo.out',
    stagger: 0.06,
    delay: 1,
    scrollTrigger: {
      scrub: true,
    }
  })

  gsap.to('.hero-section-video', {
    xPercent: -70,
    scrollTrigger: {
      scrub: true,
      start: "10% 30%",
      end: "60% 30%",
    }
  })

  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: "10% 30%",
    end: "60% 30%",
    markers: true,
    onEnter: () => {
      projectSelectorCollapsed.value = true
    },
    onLeaveBack: () => {
      projectSelectorCollapsed.value = false
    },
    onLeave: () => {
      projectSelectorCollapsed.value = true
    },
  });
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