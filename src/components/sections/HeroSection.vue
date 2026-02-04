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
import { useBreakpoints } from '@/composables';
import { onMounted, ref } from 'vue';

const { isMobile } = useBreakpoints()
const { gsap, SplitText, ScrollTrigger } = useGsap()

const isCollapsed = ref(false)
const sectionRef = ref<HTMLElement | null>(null)

const animationText = () => {
  const textSplit = new SplitText('.hero-section-text__title', { type: 'lines'})

  gsap.from(textSplit.lines, {
    ease: "none",
    stagger: 0.06,
    yPercent: 120,
    autoAlpha: 0,
    scrollTrigger: {
      trigger: ".hero-section",
      start: "30% center",
      end: "+=600",
      scrub: true,
    },
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
}

const animationVideoPosition = () => {
  gsap.to('.hero-section-video', {
    xPercent: -75,
    scrollTrigger: {
      trigger: sectionRef.value,
      scrub: true,
      start: "top top",
      end: "+=400",
    }
  })
}

const initScrollTrigger = () => {
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
}

onMounted(() => {
  initScrollTrigger()
  animationText()
  animationVideoPosition()
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
    padding-bottom: rem(200px);
  }

  &::before {
    content: '';
    position: absolute;
    width: rem(1000px);
    height: rem(1000px);
    top: rem(-500px);
    left: rem(-500px);
    background-color: $color-dark-purple-second;
    border-radius: 50%;
    filter: blur(rem(100px));
    z-index: 1;
    opacity: 0.5;

    @media ($media-md) {
      width: rem(500px);
      height: rem(500px);
      top: rem(-350px);
      left: rem(-350px);
    }
  }

  &::after {
    content: '';
    position: absolute;
    width: rem(1000px);
    height: rem(1000px);
    top: 50%;
    transform: translateY(-50%);
    right: rem(-700px);
    background-color: $color-green;
    border-radius: 50%;
    filter: blur(rem(100px));
    z-index: 1;
    opacity: 0.30;
    
    @media ($media-md) {
      width: rem(500px);
      height: rem(500px);
      right: rem(-350px);
    }
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

  @media ($media-md) {
    position: relative;
    min-height: auto;
  }
}
</style>