'use client';
import { useEffect, useRef, useState, type ReactNode } from 'react';

const journeyStops = [
  [300, 44, 6],
  [140, 120, 8],
  [252, 246, 12],
  [92, 312, 6],
  [54, 400, 9],
  [208, 458, 6],
  [1386, 440, 9],
  [1224, 488, 6],
  [1218, 246, 12],
  [1308, 104, 8],
  [1140, 44, 6],
  [36, 44, 6],
  [1404, 200, 6],
];

const journeyLeft =
  'M300 44H168Q140 44 140 72V154Q140 182 168 182H224Q252 182 252 210V284Q252 312 224 312H82Q54 312 54 340V490Q54 528 92 528H720';
const journeyRight =
  'M1140 44H1280Q1308 44 1308 80V136Q1308 164 1280 164H1246Q1218 164 1218 192V296Q1218 324 1246 324H1358Q1386 324 1386 352V490Q1386 528 1348 528H720';

function JourneyLines() {
  return (
    <div className="journey-network" aria-hidden="true">
      <svg
        viewBox="0 0 1440 560"
        preserveAspectRatio="none"
        fill="none"
        className="connection-lines"
        focusable="false"
      >
        <path className="journey-branch" d={journeyLeft} />
        <path className="journey-branch" d={journeyRight} />
        <path className="journey-flow" d={journeyLeft} pathLength="1" />
        <path className="journey-flow" d={journeyRight} pathLength="1" />
        <path
          className="journey-branch"
          d="M140 120H64Q36 120 36 92V44M54 400H180Q208 400 208 428V458M1308 104H1376Q1404 104 1404 132V200M1386 440H1252Q1224 440 1224 468V488"
        />
      </svg>
      {/* Dots share the paths' coordinates but stay circular as the map resizes. */}
      {journeyStops.map(([x, y, radius]) => (
        <span
          key={`${x}-${y}`}
          className={`journey-stop${x === 252 || x === 1218 ? ' journey-stop--signal' : ''}`}
          style={{
            left: `${(x / 1440) * 100}%`,
            top: `${(y / 560) * 100}%`,
            width: radius * 2,
            height: radius * 2,
          }}
        />
      ))}
      <span className="journey-note journey-note--start">Human perspective</span>
      <span className="journey-note journey-note--end">Systems thinking</span>
    </div>
  );
}

export function ServiceMap({ children, action }: { children: ReactNode; action: ReactNode }) {
  const map = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (map.current) observer.observe(map.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={map} className="service-map" data-animate={visible}>
      <div className="hero-journey">
        <JourneyLines />
        {children}
        <div className="journey-action">{action}</div>
      </div>
    </div>
  );
}
