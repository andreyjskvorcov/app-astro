<template>
  <header class="header">
    <div class="header__container">
      <div class="u-icon u-icon-logo"></div>

      <p class="header__slogan">
        Многопрофильная группа компаний
      </p>

      <div class="header__separator"></div>

      <div class="header__lang">
        <span 
          v-for="lang in langs"
         :key="lang.name"
         class="header__lang-item" 
         :class="{'is-selected' : lang.selected}"
         @click="selectedLang(lang)"
        >
          {{ lang.name }}
        </span>
      </div>

      <div class="header__burger" @click="onOpenMenu">
        <Transition>
          <i v-if="isOpenMenu" class="u-icon u-icon-burger-open"></i>

          <i v-else class="u-icon u-icon-burger-close"></i>
        </Transition>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface ILang {
  name: string,
  selected: boolean
}

const isOpenMenu = ref(false)

const langs = ref<ILang[]>([
  {
    name: 'Ru',
    selected: true
  },
  {
    name: 'En',
    selected: false
  }
])

const selectedLang = (lang: ILang): void => {
  langs.value.forEach(l => (l.selected = l === lang));
}

const onOpenMenu = (): void => {
  isOpenMenu.value = !isOpenMenu.value
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 40px;
  left: 40px;
  height: 88px;
  z-index: 10;
  backdrop-filter: blur(25px);
  background: rgba($color-gray, 0.8);
  border-radius: 20px;

  &__container {
    display: flex;
    padding: 0 0 0 32px;
    height: 100%;
    align-items: center;
  }

  &__slogan {
    max-width: 128px;
    margin-left: 43px;
  }

  &__separator {
    width: 1px;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      $color-black 50%,
      transparent 0
    );
    background-size: 4px 12px;
    background-repeat: repeat-y;
    margin-left: 32px;
  }

  &__lang {
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 37px;

    &-item {
      cursor: pointer;
      text-transform: uppercase;
      color: $color-black;
      transition: $transition3;
      color: rgba($color-black, 0.4);

      &:hover {
        color: $color-black;
      }

      &.is-selected {
        color: $color-green;
      }
    }
  }

  &__burger {
    width: 88px;
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: $color-green;
    border-radius: 0 20px 20px 0;
    position: relative;
    transition: $transition3;

    &:hover {
      background-color: $color-light-green;
    }

    i {
      position: absolute;
      width: 40px;
      height: 40px;
    }
  }
}
</style>