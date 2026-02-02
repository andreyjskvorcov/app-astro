<template>
  <section class="hero-section">
    <div class="hero-section__container">
      <!-- <HeroSectionSearch ref="searchRef" /> -->

      <div class="hero-section__pinned-blocks">
        <ProjectSelector />

        <HeroSectionVideo />

        <ScrollDownButton />

        <PrintX />
      </div>

      <div class="hero-section__pinned-text">
        <HeroSectionText />
      </div>
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

const projectSelectorCollapsed = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

onMounted(() => {
  // const heroTextSplit = new SplitText('.hero-section-text__title', { type: 'lines'})

  // gsap.from(heroTextSplit.lines, {
  //   duration: 1.8,
  //   ease: 'expo.out',
  //   stagger: 0.06,
  //   scrollTrigger: {
  //     start: "top top",
  //     end: "bottom bottom",
  //     scrub: true,
  //   }
  // })

  gsap.to('.hero-section-video', {
    xPercent: -80,
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
      scrub: true,
      markers: true,
      start: "top top",
      end: "bottom bottom", // меньше значение = быстрее
    }
  })

  // ScrollTrigger.create({
  //   trigger: sectionRef.value,
  //   start: "10% 30%",
  //   end: "60% 30%",
  //   onEnter: () => {
  //     projectSelectorCollapsed.value = true
  //   },
  //   onLeaveBack: () => {
  //     projectSelectorCollapsed.value = false
  //   },
  //   onLeave: () => {
  //     projectSelectorCollapsed.value = true
  //   },
  // });

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
}

.hero-section__pinned-text {
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
}
</style>