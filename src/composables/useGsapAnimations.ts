import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useGsapAnimations = (options: Record<string, unknown> = {}) => {
  const elRef = ref(null)
  let tween: gsap.core.Tween | null = null

  onMounted(() => {
    const el = elRef.value
    if (!el) return

    const st = options.scrollTrigger
      ? { ...options.scrollTrigger, trigger: el }
      : undefined

    tween = gsap.to(el, { ...options, scrollTrigger: st })
  })

  onBeforeUnmount(() => {
    tween?.scrollTrigger?.kill()
    tween?.kill()
  })

  return elRef
}