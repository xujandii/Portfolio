'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
export function ReadingProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = document.documentElement.scrollHeight - innerHeight;
      if (ref.current)
        ref.current.style.transform = `scaleX(${height > 0 ? Math.min(1, scrollY / height) : 0})`;
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('scroll', queue);
      removeEventListener('resize', queue);
    };
  }, [pathname]);
  return <div ref={ref} className="reading-progress" aria-hidden="true" />;
}
