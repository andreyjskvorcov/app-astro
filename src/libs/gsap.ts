import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/src/SplitText';

let registered = false;

export function useGsap() {
  if (!registered && typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    registered = true;
  }

  return { gsap, ScrollTrigger, SplitText } as const;
}
