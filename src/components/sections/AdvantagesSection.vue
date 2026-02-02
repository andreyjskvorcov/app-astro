<template>
  <section class="advanteges-section">
    <div
      ref="refImg"
      class="advanteges-section__image"
    ></div>

    <div class="advanteges-section__container container">
      <div class="advanteges-section__items">
        <div
          v-for="(item, index) in items"
          :key="index"
          :ref="el => (itemsRef[index] = el as HTMLElement | null)"
          class="advanteges-section__item"
        >
          <h1 class="green">
            <template v-if="index === 0">До</template>

            {{ item.percent }}

            <div class="percent">
              <i class="u-icon u-icon-percent"></i>
            </div>
          </h1>

          <h4>{{ item.text }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useGsap } from '@libs/gsap'

const { gsap } = useGsap()

interface Item {
  percent: string
  text: string
}

const items: Item[] = [
  { percent: '50', text: 'снижение расходов на печать' },
  { percent: '20–25', text: 'экономия благодаря сокращению нецелевой печати и внедрению политик' },
  { percent: '10–15', text: 'снижение нагрузки на службу техподдержки' }
]

const refImg = ref<HTMLElement | null>(null)
const itemsRef = ref<(HTMLElement | null)[]>([])

onMounted(() => {
  gsap.to(refImg.value, {
    yPercent: 30,
    ease: "none",
    scrollTrigger: {
      trigger: ".advanteges-section",
      scrub: 1,
    }, 
  });
})
</script>

<style lang="scss">
.advanteges-section {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  @media ($media-md) {
    padding: rem(254px) 0 20px;
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
    opacity: 0.3;

    @media ($media-md) {
      width: rem(500px);
      height: rem(500px);
      right: rem(-350px);
    }
  }

  &__image {
    background-image: url('../../assets/images/advanteges-bg.webp');
    place-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    @media ($media-md) {
      height: 502px;
    }
  }

  &__items {
    position: relative;
    z-index: 2;
    display: grid;
    gap: rem(28px) rem(32px);
    grid-template-columns: $grid-cols-3;
    grid-template-rows: $grid-cols-2;

    @media ($media-lg) {
      grid-template-columns: $grid-cols-1;
      grid-template-rows: inherit;
      gap: rem(12rem);
    }
  }

  &__item {
    grid-column: $col-span-1;
    background: rgba($color-total-white, 0.8);
    backdrop-filter: blur(rem(100px));
    -webkit-backdrop-filter: blur(rem(100px));
    border-radius: rem(15px);
    min-height: rem(226px);
    display: flex;
    flex-direction: column;
    padding: rem(40px);
    text-transform: lowercase;


    &:first-child {
      grid-area: 1 / 1 / 2 / 2;

      @media ($media-lg) {
        grid-area: initial;
      }
    }

    &:nth-child(2) {
      grid-area: 2 / 2 / 3 / 3;

      @media ($media-lg) {
       grid-area: initial;
      }
    }

    &:last-child {
      grid-area: 1 / 3 / 2 / 4;

      @media ($media-lg) {
        grid-area: initial;
      }
    }

    h1 {
      display: flex;
      position: relative;
      line-height: rem(46px);

      &::after {
        content: '';
        margin-left: auto;
        width: rem(14px);
        height: rem(14px);
        border-radius: 50%;
        border: rem(1px) solid $color-green;
      }
    }

    h4 {
      margin-top: auto;
      max-width: rem(420px);
      width: 100%;
    }

    .percent {
      width: rem(44px);
      height: rem(44px);
      border-radius: rem(10px);
      display: flex;
      justify-content: center;
      align-items: center;
      border: rem(1px) solid $color-green;
      margin-left: rem(15px);
    }
  }
}
</style>
