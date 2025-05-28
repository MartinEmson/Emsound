// utils/smoothScroll.js
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined' && !gsap.core.globals().ScrollToPlugin) {
  gsap.registerPlugin(ScrollToPlugin);
}

const smoothScrollTo = (id, offsetY = 50, duration = 1) => {
  const target = document.getElementById(id);
  if (!target) return;

  gsap.to(window, {
    duration,
    scrollTo: {
      y: target,
      offsetY,
    },
    ease: 'power2.out',
  });
};

export default smoothScrollTo;
