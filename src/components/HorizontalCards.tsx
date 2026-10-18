'use client';
import { useEffect, useRef, type ReactNode } from 'react';

export function HorizontalCards({
  id,
  label,
  className = '',
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const track = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onWheel = (event: WheelEvent) => {
      // Keep pinch zoom, horizontal trackpad gestures, and modified scrolling native.
      if (
        !hoverPointer.matches ||
        (event.target instanceof Element && event.target.closest('dialog')) ||
        event.defaultPrevented ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        Math.abs(event.deltaX) >= Math.abs(event.deltaY)
      )
        return;
      const maximum = element.scrollWidth - element.clientWidth;
      const delta =
        event.deltaY *
        (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientWidth : 1);
      const canMove = delta > 0 ? element.scrollLeft < maximum - 1 : element.scrollLeft > 1;
      // At either end, let the same wheel gesture continue down or up the page.
      if (!canMove || !event.cancelable) return;
      event.preventDefault();
      element.scrollBy({
        left: delta,
        behavior: reducedMotion.matches ? 'instant' : 'smooth',
      });
    };
    element.addEventListener('wheel', onWheel, { passive: false });
    return () => element.removeEventListener('wheel', onWheel);
  }, []);
  return (
    <div className={`horizontal-cards ${className}`}>
      <p className="card-track-hint">Scroll to explore</p>
      <div
        ref={track}
        id={id}
        className="card-track"
        role="region"
        aria-label={label}
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            track.current?.scrollBy({
              left: event.key === 'ArrowRight' ? 320 : -320,
              behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
                ? 'auto'
                : 'smooth',
            });
          }
          if (event.key === 'Home' || event.key === 'End') {
            event.preventDefault();
            track.current?.scrollTo({
              left: event.key === 'Home' ? 0 : track.current.scrollWidth,
              behavior: 'instant',
            });
          }
        }}
      >
        {children}
      </div>
    </div>
  );
}
