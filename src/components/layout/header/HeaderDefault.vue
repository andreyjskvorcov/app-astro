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
  top: rem(40px);
  left: rem(40px);
  height: rem(88px);
  z-index: 10;

  @media ($media-md) {
    top: rem(20px);
    left: rem(12px);
    height: rem(58px);
  }

  &__container {
    display: flex;
    padding: 0 0 0 rem(32px);
    height: 100%;
    align-items: center;
    position: relative;

    @media ($media-md) {
      padding: 0 0 0 rem(21px);
    }

    &::before {
      backdrop-filter: blur(rem(25px));
      -webkit-backdrop-filter: blur(rem(25px));
      background: rgba($color-gray, 0.8);
      border-radius: rem(20px) 0 0 rem(20px);
      clip-path: polygon(5% 0, 100% 0, 100% 80%, 100% 100%, 0 100%, 0 30%);
      content: '';
      position: absolute;
      width: calc(100% - rem(88px));
      height: 100%;
      left: 0;
      top: 0;
      z-index: -1;

      @media ($media-md) {
        width: calc(100% - #{rem(58px)});
      }
    }
  }

  &__slogan {
    max-width: rem(128px);
    margin-left: rem(43px);

    @media ($media-md) {
      max-width: rem(99px);
      margin-left: rem(49px);
    }
  }

  &__separator {
    width: rem(1px);
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      $color-black 50%,
      transparent 0
    );
    background-size: rem(4px) rem(12px);
    background-repeat: repeat-y;
    margin-left: rem(32px);

    @media ($media-md) {
      display: none;
    }
  }

  &__lang {
    padding: 0 rem(40px);
    display: flex;
    align-items: center;
    gap: rem(37px);

    @media ($media-md) {
      display: none;
    }

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
    width: rem(88px);
    height: rem(88px);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: $color-green;
    border-radius: 0 rem(20px) rem(20px) 0;
    transition: $transition3;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 75% 100%, 0 100%, 0% 50%);

    @media ($media-md) {
      width: rem(58px);
      height: rem(58px);
      margin-left: rem(44px);
    }

    &:hover {
      background-color: $color-light-green;
    }

    i {
      position: absolute;
      width: rem(40px);
      height: rem(40px);

      @media ($media-md) {
        width: rem(28px);
        height: rem(28px);
      }
    }
  }
}
</style>