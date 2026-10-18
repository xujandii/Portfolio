'use client';

import { Children, useEffect, useRef, type CSSProperties, type ReactNode } from 'react';
import styles from './stacking-card.module.css';

export default function StackingCards({ children }: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);
  const cards = Children.toArray(children);
  const count = cards.length;

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const surfaces = [...element.querySelectorAll<HTMLElement>(`.${styles.card}`)];
    const enabled = window.matchMedia(
      '(min-width: 761px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)',
    );
    let frame = 0;
    let visible = false;
    let lastProgress = -1;
    let distance = Math.max(1, element.offsetHeight - innerHeight);
    const update = () => {
      frame = 0;
      if (!enabled.matches) return;
      const progress = Math.max(0, Math.min(1, -element.getBoundingClientRect().top / distance));
      if (progress === lastProgress) return;
      lastProgress = progress;
      // Preserve the existing scale curve without rerendering the card tree on each frame.
      surfaces.forEach((surface, index) => {
        const start = index / count;
        const target = 1 - (count - 1 - index) * 0.05;
        const scale = 1 + (target - 1) * Math.max(0, Math.min(1, (progress - start) / (1 - start)));
        surface.style.transform = `scale(${scale})`;
      });
    };
    const queue = () => {
      if (enabled.matches && visible && !frame) frame = requestAnimationFrame(update);
    };
    const measure = () => {
      cancelAnimationFrame(frame);
      distance = Math.max(1, element.offsetHeight - innerHeight);
      lastProgress = -1;
      update();
    };
    const syncPreference = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastProgress = -1;
      if (enabled.matches) measure();
      else surfaces.forEach((surface) => surface.style.removeProperty('transform'));
    };
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      // Set the boundary state even when a fast scroll skips the stack.
      cancelAnimationFrame(frame);
      update();
    });
    const resize = new ResizeObserver(measure);
    visibility.observe(element);
    resize.observe(element);
    enabled.addEventListener('change', syncPreference);
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', measure);
    syncPreference();
    return () => {
      cancelAnimationFrame(frame);
      visibility.disconnect();
      resize.disconnect();
      enabled.removeEventListener('change', syncPreference);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', measure);
    };
  }, [count]);

  return (
    <div ref={container} className={styles.stack}>
      {cards.map((card, i) => (
        <div
          key={typeof card === 'object' && card !== null && 'key' in card ? card.key : i}
          className={styles.slot}
          style={{ '--card-index': i } as CSSProperties}
        >
          <div className={styles.card}>{card}</div>
        </div>
      ))}
    </div>
  );
}
