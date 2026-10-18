'use client';
import { useEffect, useRef, useState } from 'react';
import { MagnifyingGlass, Target, PencilRuler, FlagCheckered } from '@phosphor-icons/react';

export function ApproachTimeline() {
  const section = useRef<HTMLElement>(null);
  const [reached, setReached] = useState(-1);
  useEffect(() => {
    const element = section.current;
    const grid = element?.querySelector<HTMLElement>('.approach-grid');
    if (!element || !grid) return;
    const items = [...grid.querySelectorAll<HTMLElement>('.approach-item')];
    const nodes = items.map((item) => item.querySelector<HTMLElement>('.approach-node')!);
    const headerElement = document.querySelector('.site-header');
    const headingElement = element.querySelector('.section-intro');
    const previousProgress: number[] = [];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let visible = false;
    let lastReached = -1;
    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const update = () => {
      frame = 0;
      const gridRect = grid.getBoundingClientRect();
      let current = -1;
      let progress: number[];
      if (document.documentElement.clientWidth <= 760) {
        // Follow the actual stops, including wrapped copy and unequal item heights.
        const stops = nodes.map((node) => {
          const box = node.getBoundingClientRect();
          return box.top + box.height / 2;
        });
        // Reach Delivery while its full description still has room below the stroke.
        const lastItemHeight = items.at(-1)!.getBoundingClientRect().height;
        const readingPoint = Math.min(innerHeight * 0.7, innerHeight - lastItemHeight - 64);
        progress = stops
          .slice(0, -1)
          .map((stop, index) =>
            clamp((readingPoint - stop) / Math.max(1, stops[index + 1] - stop)),
          );
        stops.forEach((stop, index) => {
          if (stop <= readingPoint) current = index;
        });
      } else {
        const header = headerElement?.getBoundingClientRect().height ?? 85;
        const heading = headingElement?.getBoundingClientRect().height ?? 100;
        const readingSpace = parseFloat(getComputedStyle(element).paddingBottom);
        // Finish with the entire row visible and 120px of scrolling before the next section.
        const end = Math.max(
          header + heading + 24,
          innerHeight - gridRect.height - readingSpace + 120,
        );
        const start = Math.max(end + 120, innerHeight - gridRect.height - 48);
        const position = clamp((start - gridRect.top) / (start - end)) * (items.length - 1);
        progress = items.slice(0, -1).map((_, index) => clamp(position - index));
        if (gridRect.top <= start) current = Math.floor(position + 0.0001);
      }
      // Update only stroke offsets each frame; React updates at stage boundaries.
      items.slice(0, -1).forEach((item, index) => {
        const value = reducedMotion.matches ? 1 : progress[index];
        if (previousProgress[index] === value) return;
        previousProgress[index] = value;
        item.style.setProperty('--connector-progress', String(value));
      });
      // Reached stages stay highlighted through the section's exit, without a single active stage.
      const nextReached = reducedMotion.matches ? items.length - 1 : current;
      if (lastReached !== nextReached) {
        lastReached = nextReached;
        setReached(nextReached);
      }
    };
    const queue = () => {
      if (visible && !reducedMotion.matches && !frame) frame = requestAnimationFrame(update);
    };
    const refresh = () => {
      cancelAnimationFrame(frame);
      update();
    };
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      refresh();
    });
    visibility.observe(grid);
    const observer = new ResizeObserver(queue);
    observer.observe(grid);
    reducedMotion.addEventListener('change', refresh);
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      visibility.disconnect();
      reducedMotion.removeEventListener('change', refresh);
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
    };
  }, []);
  return (
    <section
      ref={section}
      className="approach-section page-width"
      aria-labelledby="approach-heading"
    >
      <div className="section-intro section-intro--sticky">
        <div>
          <h2 id="approach-heading">My approach</h2>
        </div>
      </div>
      <div className="approach-grid">
        {[
          {
            n: '01',
            name: 'Discover',
            icon: (
              <MagnifyingGlass
                size={24}
                weight="regular"
                aria-hidden="true"
                focusable="false"
                className="tw:block tw:shrink-0"
              />
            ),
            title: 'Get close to reality',
            text: 'Listen actively, observe the mundane, and dig out the hidden needs lurking beneath the initial brief.',
          },
          {
            n: '02',
            name: 'Define',
            icon: (
              <Target
                size={24}
                weight="regular"
                aria-hidden="true"
                focusable="false"
                className="tw:block tw:shrink-0"
              />
            ),
            title: 'Find the right question',
            text: 'Step back, zoom out, connect perspectives, and define a shared direction.',
          },
          {
            n: '03',
            name: 'Design',
            icon: (
              <PencilRuler
                size={24}
                weight="regular"
                aria-hidden="true"
                focusable="false"
                className="tw:block tw:shrink-0"
              />
            ),
            title: 'Think by making',
            text: 'Map the complexity, explore the what-ifs, and transform risky assumptions into testable reality checks.',
          },
          {
            n: '04',
            name: 'Delivery',
            icon: (
              <FlagCheckered
                size={24}
                weight="regular"
                aria-hidden="true"
                focusable="false"
                className="tw:block tw:shrink-0"
              />
            ),
            title: 'Polish and iterate',
            text: 'Visualize the details, keep the human outcome in view and communicate the value of the work to stakeholders',
          },
        ].map((s, index) => (
          <div className="approach-item" data-reached={reached >= index} key={s.name}>
            <span className="approach-node" aria-hidden="true" />
            {index < 3 && (
              <svg className="approach-connector" aria-hidden="true" focusable="false">
                <g className="approach-connector-horizontal">
                  <line className="approach-connector-track" x1="0" y1="50%" x2="100%" y2="50%" />
                  <line
                    className="approach-connector-ink"
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    pathLength="1"
                  />
                </g>
                <g className="approach-connector-vertical">
                  <line className="approach-connector-track" x1="50%" y1="0" x2="50%" y2="100%" />
                  <line
                    className="approach-connector-ink"
                    x1="50%"
                    y1="0"
                    x2="50%"
                    y2="100%"
                    pathLength="1"
                  />
                </g>
              </svg>
            )}
            <div className="approach-step-mark tw:mb-4 tw:flex tw:items-center tw:gap-3 tw:max-[761px]:mb-3">
              <span className="approach-icon">{s.icon}</span>
              <span className="tw:text-xs tw:leading-none">{s.n}</span>
            </div>
            <span className="step-name">{s.name}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
