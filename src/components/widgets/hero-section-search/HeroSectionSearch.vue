<template>
  <div class="hero-section-search">
    <PInput v-model="search" placeholder="поиск">
      <template #after>
        <i class="u-icon u-icon-search"></i>
      </template>
    </PInput>
  </div>
</template>

<script lang="ts" setup>
import { PInput } from '@components/ui'
import { ref } from 'vue';

const search = ref('')
</script>

<style lang="scss">
.hero-section-search {
  position: absolute;
  right: 40px;
  top: 40px;
  z-index: 2;
  width: 272px;
}
</style>