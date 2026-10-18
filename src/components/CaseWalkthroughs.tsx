'use client';

import { useId, useState } from 'react';
import type { CaseWalkthrough } from '@/content/projects';
import { assetPath } from '@/lib/paths';

export function CaseWalkthroughs({
  items,
  intro = 'These short walkthroughs trace the proposed experience, from choosing a task to working with the result. These recordings demonstrate the prototype, not a live AI service.',
  layout = 'stacked',
  showTranscript = true,
}: {
  items: CaseWalkthrough[];
  intro?: string;
  layout?: 'stacked' | 'portrait';
  showTranscript?: boolean;
}) {
  const [selectedId, setSelectedId] = useState(items[0]?.id);
  const id = useId();
  const selected = items.find((item) => item.id === selectedId) ?? items[0];

  if (!selected) return null;

  const width = selected.width ?? 1920;
  const height = selected.height ?? 1080;

  return (
    <div
      className={`case-walkthroughs case-walkthroughs--${layout}`}
      aria-labelledby={`${id}-heading`}
    >
      <h3 id={`${id}-heading`}>See the prototype in use.</h3>
      <p className="case-walkthroughs-intro">{intro}</p>
      <div className="case-walkthrough-layout">
        <div
          className="case-walkthrough-choices"
          role="group"
          aria-label="Choose a prototype walkthrough"
        >
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={selected.id === item.id}
              aria-controls={`${id}-player`}
              onClick={() => setSelectedId(item.id)}
            >
              <span>{item.title}</span>
              <span className="case-walkthrough-duration" aria-label={`Duration ${item.duration}`}>
                {item.duration}
              </span>
            </button>
          ))}
        </div>
        <figure className="case-walkthrough-player" id={`${id}-player`}>
          {/* These silent recordings have a descriptive text equivalent beside the playback controls. */}
          <video
            key={selected.src}
            controls
            playsInline
            preload="none"
            width={width}
            height={height}
            style={{ aspectRatio: `${width} / ${height}` }}
            poster={assetPath(selected.poster)}
            aria-label={`${selected.title} prototype walkthrough`}
            aria-describedby={`${id}-caption${showTranscript ? ` ${id}-steps` : ''}`}
          >
            <source src={assetPath(selected.src)} type="video/mp4" />
            <p>Your browser cannot play this recording. {selected.description}</p>
          </video>
        </figure>
      </div>
      <p className="sr-only" id={`${id}-caption`}>
        {selected.description}
      </p>
      {showTranscript && (
        <details className="case-media-disclosure case-walkthrough-transcript" key={selected.id}>
          <summary>
            Read the walkthrough <span aria-hidden="true">+</span>
          </summary>
          <ol id={`${id}-steps`}>
            {selected.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </details>
      )}
    </div>
  );
}
