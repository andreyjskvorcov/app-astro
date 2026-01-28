import { computed, onMounted, onUnmounted, ref } from "vue";

const BREAKPOINTS = {
  xs: 375,
  md: 1280,
  lg: 1920,
  xl: 2560,
} as const;

export function useBreakpoints() {
  const width = ref(0);

  const update = () => {
    width.value = window.innerWidth;
  };

  onMounted(() => {
    update();
    window.addEventListener("resize", update);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });

  const isMobile = computed(() => width.value < BREAKPOINTS.md);
  const isTablet = computed(
    () => width.value >= BREAKPOINTS.md && width.value < BREAKPOINTS.lg
  );
  const isDesktop = computed(
    () => width.value >= BREAKPOINTS.lg && width.value < BREAKPOINTS.xl
  );
  const isWide = computed(() => width.value >= BREAKPOINTS.xl);

  return {
    width,
    isMobile,
    isTablet,
    isDesktop,
    isWide,
  };
}