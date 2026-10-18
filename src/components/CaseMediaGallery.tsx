'use client';

import Image from 'next/image';
import { useEffect, useId, useRef, useState } from 'react';
import { MagnifyingGlassMinus, MagnifyingGlassPlus, X } from '@phosphor-icons/react';
import type { CaseMediaGroup } from '@/content/projects';
import { assetPath } from '@/lib/paths';

export function CaseMediaGallery({ groups }: { groups: CaseMediaGroup[] }) {
  const [selected, setSelected] = useState<CaseMediaGroup['items'][number] | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const viewerRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const captionId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const previousGutter = root.style.scrollbarGutter;
    root.style.scrollbarGutter = 'stable';
    root.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      root.style.overflow = previousOverflow;
      root.style.scrollbarGutter = previousGutter;
      if (dialog.open) dialog.close();
    };
  }, [selected]);

  return (
    <div className="case-media-groups">
      {groups.map((group) => {
        const gallery = (
          <div className={`case-media-grid case-media-grid--${group.layout ?? 'single'}`}>
            {group.items.map((item) => (
              <figure className="case-media-figure" key={item.src}>
                <button
                  className="case-media-image"
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={`Enlarge ${item.title.toLowerCase()}`}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setSelected(item);
                  }}
                >
                  <Image
                    src={assetPath(item.src)}
                    unoptimized={item.unoptimized}
                    width={item.width}
                    height={item.height}
                    alt={item.alt}
                    sizes={
                      group.layout === 'screens'
                        ? '(max-width: 760px) 38vw, 200px'
                        : group.layout === 'detail'
                          ? '(max-width: 760px) 28vw, 180px'
                          : group.layout === 'portraits'
                            ? '(max-width: 760px) 240px, 200px'
                            : group.layout === 'half'
                              ? '(max-width: 760px) calc(100vw - 80px), (max-width: 1000px) 31vw, 32vw'
                              : group.layout === 'pair'
                                ? '(max-width: 760px) calc(100vw - 80px), (max-width: 1000px) 30vw, 32vw'
                                : '(max-width: 760px) calc(100vw - 80px), (max-width: 1000px) 62vw, 65vw'
                    }
                    loading="lazy"
                  />
                </button>
                <figcaption>
                  <strong>{item.title}</strong>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        );
        return group.disclosure ? (
          <details className="case-media-disclosure" key={group.title}>
            <summary>
              {group.title}
              <span aria-hidden="true">+</span>
            </summary>
            {gallery}
          </details>
        ) : (
          <div key={group.title} className="case-media-group">
            {gallery}
          </div>
        );
      })}
      <dialog
        ref={dialogRef}
        className="case-media-dialog"
        aria-labelledby={titleId}
        aria-describedby={captionId}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onClose={() => {
          setSelected(null);
          setZoomed(false);
          triggerRef.current?.focus({ preventScroll: true });
        }}
      >
        {selected && (
          <div className="case-media-dialog-panel">
            <div className="case-media-dialog-toolbar">
              <p id={titleId}>{selected.title}</p>
              <button
                type="button"
                className="case-media-zoom"
                aria-pressed={zoomed}
                aria-label="Zoom image to full resolution"
                onClick={() => {
                  setZoomed(!zoomed);
                  if (viewerRef.current) {
                    viewerRef.current.scrollTop = 0;
                    viewerRef.current.scrollLeft = 0;
                  }
                }}
              >
                {zoomed ? (
                  <MagnifyingGlassMinus size={22} weight="regular" aria-hidden="true" />
                ) : (
                  <MagnifyingGlassPlus size={22} weight="regular" aria-hidden="true" />
                )}
                <span>{zoomed ? 'Fit to screen' : 'Zoom in'}</span>
              </button>
              <button
                type="button"
                className="case-media-close"
                aria-label="Close image"
                onClick={() => dialogRef.current?.close()}
              >
                <X size={24} weight="regular" aria-hidden="true" />
              </button>
            </div>
            <div
              ref={viewerRef}
              className="case-media-viewer"
              data-zoomed={zoomed}
              role="region"
              aria-label={zoomed ? 'Full-resolution image. Scroll to explore.' : 'Image preview'}
              tabIndex={0}
            >
              <Image
                src={assetPath(selected.src)}
                width={selected.width}
                height={selected.height}
                alt={selected.alt}
                unoptimized
              />
            </div>
            <p className="case-media-dialog-caption" id={captionId}>
              {selected.caption}
            </p>
          </div>
        )}
      </dialog>
    </div>
  );
}
