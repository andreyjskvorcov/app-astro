<template>
  <section ref="sectionRef" class="capability-section">
    <div class="capability-section__container container">
      <h3 class="capability-section__title white">
        <i class="u-icon u-icon-arrow-down-right"></i>
        Возможности Print-X
      </h3>

      <div class="capability-section__image"></div>

      <div ref="itemsContainerRef" class="capability-section__items">
        <div 
          v-for="(item, index) in items"
          :key="item.num"
          :ref="el => (itemsRefs[index] = el as HTMLElement | null)"
          class="capability-section__item"
        >
          <div class="capability-section__item-wrap">
            <h3 class="green">{{ item.title }}</h3>
            <h4 class="green">{{ item.num }}</h4>
            <div class="capability-section__item-text">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import { useGsap } from '@libs/gsap'

const { gsap } = useGsap()

interface Item {
  num: string,
  title: string,
  description: string
}

const itemsContainerRef = ref<HTMLElement | null>(null)
const sectionRef = ref<HTMLElement | null>(null)
const itemsRefs = ref<(HTMLElement | null)[]>([])

const items: Item[] = [
  {
    num: '01',
    title: 'Повышение производительности труда',
    description: 'Интеллектуальный рабочий процесс позволяет автоматически направлять ваши документы в заранее определённое место назначения с использованием метаданных'
  },
  {
    num: '02',
    title: 'Отказоустойчивость печати',
    description: 'Используя функции автономного входа в систему, пользователи смогут распечатать задание даже при отсутствии связи с сервером. При возникновении проблем пользователь может распечатать свои документы на любом ближайшем исправном принтере'
  },
  {
    num: '03',
    title: 'Конфиденциальность и безопасность печати',
    description: 'Доступ к устройствам за один шаг с помощью ПИН-кода, ИД-карты или имени/пароля либо двухэтапная аутентификация.Шифрование данных и функция Print&Follow™ гарантирует, что получить доступ к вашим документам и распечатать их могут только авторизированные пользователи'
  },
  {
    num: '04',
    title: 'Контроль и мониторинг печати',
    description: 'Print-X хранит подробную статистику обо всех распечатанных, отсканированных и скопированных документах, а также затратах на печать, ассоциированных с пользователями, отделами или проектами'
  },
  {
    num: '05',
    title: 'Роуминг заданий',
    description: 'Необходимый функционал для сотрудников, постоянно перемещающихся между филиалами компании — задание автоматически помещается на соответствующий сайт-сервер в соответствии с местоположением сотрудника'
  },
]

onMounted(() => {
  const elements = itemsRefs.value;
  const elementsOffsetWidth = itemsContainerRef.value.offsetWidth;

  const scrollTween = gsap.to(elements, {
    xPercent: -100 * (elements.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.value,
      pin: true,
      scrub: 1,
      end: () => "+=" + elementsOffsetWidth,
    },
  });

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: element,
          containerAnimation: scrollTween,
          start: "center center",
          end: "right left",     
          scrub: true,
        },
      }
    );
  });
});
</script>

<style lang="scss">
.capability-section {
  padding: 50px 0;
  background-color: $color-dark-purple;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  
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

  &__title {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  &__image {
    background-image: url('../../assets/images/capability-bg.webp');
    place-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 759px;
    margin: 12px 2px;
  }

  &__item {
    position: relative;
    height: 100vh;
    width: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    padding-bottom: 32px;

    &:first-child {
      margin-left: 300px;
    }

    &-wrap {
      background-color: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(100px);
      border-radius: 15px;
      padding: 40px;
      display: flex;
      flex-wrap: wrap;
      height: 370px;
      width: 592px;
      position: relative;
    }

    h3 {
      max-width: 300px;
    }

    h4 {
      margin-left: auto;
    }

    &-text {
      margin-top: auto;
      color: $color-total-white;
    }
  }

  &__items {
    align-items: center;
    display: flex;
    width: max-content;
    position: relative;
    z-index: 2;
    height: 100%;
  }
}
</style>