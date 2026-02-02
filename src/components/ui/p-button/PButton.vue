<template>
  <button 
    class="p-button"
    v-bind="$attrs" 
    :class="[`q-btn-${props.type}`]" 
   >
    <slot v-if="$slots.before" name="before" />

    <slot />

    <slot v-if="$slots.after" name="after" />
  </button>
</template>

<script setup lang="ts">
type ButtonType = 'primary' | 'outline' | 'light' | 'white' | 'link'

interface IProps {
  type?: ButtonType
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'primary',
})
</script>


<style lang="scss">
.p-button {
  display: flex;
  width: 100%;
  height: rem(64px);
  min-width: rem(64px);
  padding: rem(11px);
  justify-content: center;
  align-items: center;
  gap: rem(10px);
  border-radius: rem(15px);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(rem(12.5px));
  -webkit-backdrop-filter: blur(rem(12.5px));
  color: $color-black;

  font-size: rem(11px);
  font-style: normal;
  font-weight: 500;
  line-height: rem(16px);
  letter-spacing: 0.05em; // 0.55px / 11px
  text-transform: uppercase;

  outline: none;
  border: none;
  transition: $transition3;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    opacity: 0.7;
    outline: none;
    border: none;
  }

  .u-icon {
    width: rem(24px);
    height: rem(24px);
  }
}

</style>