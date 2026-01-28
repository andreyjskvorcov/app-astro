import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGsapScrollAnimations = (
  options: Record<string, unknown> = {},
  scrollTrigger: Record<string, unknown> = {}
) => {
  const elRef = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (!elRef.value) return

    gsap.to(elRef.value, {
      ...options,
      scrollTrigger: {
        trigger: elRef.value,
        scrub: true,
        ...scrollTrigger,
      },
    })
  })

  return elRef
}

/* 
  usage:
    import { useGsapScrollAnimations } from '@/composables/useGsapScrollAnimations';

    const analyticsRef = useGsapScrollAnimations();

    const badgeRef = useGsapScrollAnimations({
      opacity: 0,
      duration: 0.7,
      scale: 0,
      ease: 'power2.out',
    });
*/
