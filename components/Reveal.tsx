'use client';

import { useEffect } from 'react';

export default function Reveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    if (!('IntersectionObserver' in window)) {
      const items = document.querySelectorAll('.reveal-item');
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -32px 0px',
      }
    );

    const selector =
      'main > section:not(#home), #categories article, #menu article, #why-jsm .grid > div, #locations .grid > div, footer';
    const targets = document.querySelectorAll(selector);

    targets.forEach((target) => {
      target.classList.add('reveal-item');
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
