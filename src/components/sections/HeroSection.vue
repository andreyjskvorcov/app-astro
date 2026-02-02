<template>
  <section class="hero-section">
    <div class="hero-section__container">
      <HeroSectionSearch ref="searchRef" />

      <div class="hero-section__pinned-blocks">
    
        <ProjectSelector :class="{'is-collapsed' : isCollapsed }" />

        <HeroSectionVideo />

        <ScrollDownButton />

        <PrintX />
      </div>

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
import { useGsap } from '@libs/gsap'
import { onMounted, ref } from 'vue';

const { gsap, SplitText, ScrollTrigger, ScrollSmoother } = useGsap()

const isCollapsed = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  const heroTextSplit = new SplitText('.hero-section-text__title', { type: 'lines'})

  gsap.from(heroTextSplit.lines, {
  ease: "none",
  stagger: 0.06,
  yPercent: 120,
  autoAlpha: 0,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "30% center",
    end: "+=600",      // больше = плавнее
    scrub: true,
    markers: true,
  },
  })

  gsap.to('.hero-section-video', {
    xPercent: -75,
    scrollTrigger: {
      trigger: sectionRef.value,
      scrub: true,
      start: "top top",
      end: "+=400", // меньше значение = быстрее
    }
  })

  gsap.to('.hero-section-text', {
    opacity: 1,
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top center",
      endTrigger: '.hero-section',
      end: 'bottom center'
    }
  })

  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: "10% 30%",
    end: "60% 30%",
    onEnter: () => {
      isCollapsed.value = true
    },
    onLeaveBack: () => {
      isCollapsed.value = false
    },
    onLeave: () => {
      isCollapsed.value = true
    },
  });

  ScrollTrigger.create({
    trigger: ".hero-section__pinned-blocks",
    start: "top top",
    end: "bottom bottom",
    endTrigger: '.hero-section',
    pin: true,
  });
})

</script>

<style lang="scss">
.hero-section {
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 200vh;
  overflow: hidden;
  
  &__container {
    z-index: 2;
    position: relative;
    min-height: 200vh;
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

.hero-section__pinned-blocks {
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>