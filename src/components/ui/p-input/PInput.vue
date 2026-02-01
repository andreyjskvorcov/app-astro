<template>
  <div 
    class="p-input"
    :class="{'has-after': $slots.after, 'has-before' : $slots.before }"
  >     
    <slot v-if="$slots.before" name="before" />

    <input v-bind="$attrs" v-model="model" />

    <slot v-if="$slots.after" name="after" />
  </div>
</template>

<script setup>
import { defineModel } from 'vue';

const model = defineModel({
  type: [String, Number],
  default: ''
})
</script>


<style lang="scss">
.p-input {
  position: relative;
  display: flex;
  align-items: center;

  input {
    border-radius: 15px;
    background: rgba(246, 246, 246, 0.80);
    backdrop-filter: blur(12.5px);
    border: none;
    outline: none;
    display: flex;
    height: 64px;
    padding: 20px 30px;
    justify-content: space-between;
    align-items: center;
    color: $color-black;
    font-size: 11px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 145.455% */
    letter-spacing: 0.55px;
    text-transform: uppercase;
  }

  &.has-after {
    width: fit-content;

    .u-icon {
      position: absolute;
      right: 30px;
      width: 24px;
      height: 24px;
    }

    input {
      padding-right: 54px;
    }
  }
}
</style>
