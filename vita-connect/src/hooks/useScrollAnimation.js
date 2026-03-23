import { useEffect, useRef } from 'react';

const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const { threshold = 0.1, rootMargin = '0px 0px -40px 0px' } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll('.fade-in-up, .fade-in, .scale-in');
      targets.forEach((child) => observer.observe(child));

      if (
        el.classList.contains('fade-in-up') ||
        el.classList.contains('fade-in') ||
        el.classList.contains('scale-in')
      ) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, [options]);

  return ref;
};

export default useScrollAnimation;