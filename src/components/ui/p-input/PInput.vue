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
    border-radius: rem(15px);
    background: rgba(246, 246, 246, 0.80);
    backdrop-filter: blur(rem(12.5px));
    -webkit-backdrop-filter: blur(rem(12.5px));
    border: none;
    outline: none;
    display: flex;
    height: rem(64px);
    padding: rem(20px) rem(30px);
    justify-content: space-between;
    align-items: center;
    color: $color-black;

    font-size: rem(11px);
    font-style: normal;
    font-weight: 500;
    line-height: rem(16px);
    letter-spacing: 0.05em; // 0.55px / 11px
    text-transform: uppercase;
  }

  &.has-after {
    width: fit-content;

    .u-icon {
      position: absolute;
      right: rem(36px);
      width: rem(24px);
      height: rem(24px);
    }

    input {
      padding-right: rem(54px);
    }
  }
}
</style>
