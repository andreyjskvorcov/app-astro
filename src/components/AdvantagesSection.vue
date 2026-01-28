<template>
  <div class="advanteges-section page-full">
    <div ref="refImg" class="advanteges-section__image"></div>

    <div class="advanteges-section__container container">
      <div class="advanteges-section__items">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="advanteges-section__item"
        >
          <h1 class="green">
            <template v-if="index === 0">
              До
            </template>

            {{ item.percent }}

            <div class="percent">
              <i class="u-icon u-icon-percent"></i>
            </div>
          </h1>

          <h4>{{ item.text }}</h4>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup lang="ts">

interface Item {
  percent: string,
  text: string
}

const items: Item[] = [
  {
    percent: '50',
    text: 'снижение расходов на печать',
  },
  {
    percent: '20–25',
    text: `экономия благодаря сокращению нецелевой печати и внедрению политик`,
  },
  {
    percent: '10–15',
    text: 'снижение нагрузки на службу техподдержки',
  }
]

// import { useGsapAnimations } from '@/composables';

// const refImg = useGsapAnimations({
//   yPercent: 40,
//   ease: "none",
//   scrollTrigger: {
//     scrub: true,
//     // trigger мы не передаём
//     start: "top bottom",
//     end: "bottom top",
//   }
// })
</script>

<style lang="scss">
.advanteges-section {
  display: flex;
  align-items: center;

  &__image {
    background-image: url('../assets/images/advanteges-bg.webp');
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
  }

  &__items {
    position: relative;
    z-index: 2;
    gap: 28px 32px;
    display: grid;
    grid-template-columns: $grid-cols-3;
    grid-template-rows: $grid-cols-2;
  }

  &__item {
    grid-column: $col-span-1;
    background: rgba($color-total-white, 0.8);
    backdrop-filter: blur(100px);
    border-radius: 15px;
    min-height: 226px;
    display: flex;
    flex-direction: column;
    padding: 40px;

    &:first-child {
      grid-area: 1 / 1 / 2 / 2;;
    }

    &:nth-child(2) {
      grid-area: 2 / 2 / 3 / 3;;
    }

    &:last-child {
      grid-area: 1 / 3 / 2 / 4;;
    }

    h1 {
      display: flex;
      position: relative;
      line-height: 46px;

      &::after {
        content: '';
        margin-left: auto;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border: 1px solid $color-green;
      }
    }

    h4 {
      margin-top: auto;
      max-width: 420px;
      width: 100%;
    }

    .percent {
      width: 44px;
      height: 44px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid $color-green;
      margin-left: 15px;
    }
  }
}
</style>