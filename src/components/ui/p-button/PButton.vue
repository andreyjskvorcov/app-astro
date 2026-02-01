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
  height: 64px;
  padding: 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(12.5px);
  color: $color-black;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 145.455% */
  letter-spacing: 0.55px;
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
    width: 24px;
    height: 24px;
  }
}

</style>