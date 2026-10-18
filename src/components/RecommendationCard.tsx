'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { X } from '@phosphor-icons/react';
import { LineIcon } from './Icons';

export function RecommendationCard({ role, quote }: { role: string; quote: string }) {
  const [open, setOpen] = useState(false);
  const quoteSpace = useRef<HTMLQuoteElement>(null);
  const quoteText = useRef<HTMLSpanElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const space = quoteSpace.current;
    const text = quoteText.current;
    if (!space || !text) return;
    let active = true;
    const measure = () => {
      if (!active) return;
      const lineHeight = parseFloat(getComputedStyle(text).lineHeight);
      const lines = Math.max(1, Math.floor(space.clientHeight / lineHeight));
      text.style.setProperty('--quote-lines', String(lines));
    };
    const observer = new ResizeObserver(measure);
    observer.observe(space);
    void document.fonts.ready.then(measure);
    return () => {
      active = false;
      observer.disconnect();
    };
  }, [quote]);

  useEffect(() => {
    const element = dialog.current;
    if (!open || !element) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousGutter = root.style.scrollbarGutter;
    root.style.scrollbarGutter = 'stable';
    root.style.overflow = 'hidden';
    element.showModal();
    return () => {
      root.style.overflow = previousOverflow;
      root.style.scrollbarGutter = previousGutter;
      if (element.open) element.close();
    };
  }, [open]);

  return (
    <>
      <figure>
        <span className="recommendation-quote-mark" aria-hidden="true">
          “
        </span>
        <blockquote ref={quoteSpace}>
          <span ref={quoteText} className="recommendation-quote">
            {quote}
          </span>
        </blockquote>
        <figcaption>
          <span className="quote-avatar" aria-hidden="true">
            <LineIcon name="user" />
          </span>
          <span className="recommendation-role">{role}</span>
          <button
            ref={trigger}
            type="button"
            className="recommendation-read-more"
            aria-label={`Read more of the recommendation from ${role}`}
            aria-haspopup="dialog"
            onClick={() => setOpen(true)}
          >
            Read more
          </button>
        </figcaption>
      </figure>
      <dialog
        ref={dialog}
        className="recommendation-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus({ preventScroll: true });
        }}
      >
        <div className="recommendation-dialog-heading">
          <h3 id={titleId}>
            <span className="recommendation-dialog-label">Recommendation from</span>
            {role}
          </h3>
          <button
            type="button"
            aria-label="Close recommendation"
            onClick={() => dialog.current?.close()}
          >
            <X size={24} weight="regular" aria-hidden="true" />
          </button>
        </div>
        <blockquote>{quote}</blockquote>
      </dialog>
    </>
  );
}
