<template>
  <div class="video-text">
    <div ref="textRef" class="video-text__content">
     <h1 class="reveal-text">
        Централизуем печать 
        на предприятиях 
        с помощью комплексного решения 
        <div class="green">Print-X</div> 
        для сокращения затрат, повышения эффективности 
        и безопасности процессов
      </h1>
    </div>

    <div class="video-text__steps">
      <div 
        v-for="item in items"
        :key="item.title"
        class="video-text__steps-item"
      >
        <div class="green">{{ item.title }}</div>

        <h4>{{ item.description }}</h4>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Item {
  title: string,
  description: string
}

const items: Item[] = [
  {
    title: '01',
    description: 'Продвинутое управление печатью, копированием и сканированием'
  },
  {
    title: '02',
    description: 'Удобное администрирование пользователей и оборудования'
  },
  {
    title: '03',
    description: 'Прозрачная отчетность по всей компании и каждому подразделению'
  },
  {
    title: '04',
    description: 'Высокий уровень защищенности данных'
  },
  {
    title: '05',
    description: 'Легкость интеграции и обучения'
  },
]

import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const textRef = ref(null);

import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  if (!textRef.value) return;

  const title = textRef.value.querySelector('.reveal-text') as HTMLElement;

  const nodes = Array.from(title.childNodes);

  title.innerHTML = '';

  nodes.forEach(node => {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent!.split(' ');

      words.forEach(word => {
        if (!word) return;

        const span = document.createElement('div');
        span.className = 'word';
        span.innerHTML = word + '&nbsp;';
        title.appendChild(span);
      });
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      el.classList.add('word');
      title.appendChild(el);
      title.appendChild(document.createTextNode(' '));
    }
  });

  const wordEls = title.querySelectorAll('.word');

  gsap.fromTo(
    wordEls,
    {
      y: 12,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      ease: 'none',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        end: 'top 40%',
        scrub: 0.6,
      },
    }
  );
});
</script>

<style lang="scss">
.video-text {
  display: flex;
  flex-direction: column;

  &__content {
    width: 748px;
    margin-left: auto;
    margin-right: 156px;
  }
  
  &__steps {
    margin: 70px 0 0 auto;
    gap: 32px;
    display: grid;
    grid-template-columns: $grid-cols-3;
    max-width: 904px;
    width: 100%;

    &-item {
      grid-column: $col-span-1;
      background: rgba($color-total-white, 0.8);
      backdrop-filter: blur(25px);
      border-radius: 15px;
      padding: 40px;
      min-height: 272px;
      display: flex;
      flex-direction: column;

      h4 {
        margin-top: auto;
      }
    }
  }
}
</style>