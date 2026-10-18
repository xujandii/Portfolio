'use client';
import { useEffect, useState } from 'react';
const defaultChapters = [
  { id: 'challenge', label: 'The challenge' },
  { id: 'approach', label: 'The approach' },
  { id: 'solution', label: 'The solution' },
  { id: 'impact', label: 'Potential impact' },
  { id: 'reflection', label: 'The reflection' },
];
export function CaseNavigation({
  chapters = defaultChapters,
}: {
  chapters?: { id: string; label: string }[];
}) {
  const [active, setActive] = useState(chapters[0]?.id ?? 'challenge');
  useEffect(() => {
    const visibleChapters = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleChapters.add(entry.target.id);
          else visibleChapters.delete(entry.target.id);
        }
        const current = chapters.findLast((chapter) => visibleChapters.has(chapter.id));
        if (current) setActive(current.id);
      },
      { rootMargin: '-10% 0px -60% 0px', threshold: 0 },
    );
    for (const chapter of chapters) {
      const node = document.getElementById(chapter.id);
      if (node) observer.observe(node);
    }
    return () => observer.disconnect();
  }, [chapters]);
  return (
    <nav aria-label="Case study chapters">
      {chapters.map((chapter) => (
        <a
          href={`#${chapter.id}`}
          key={chapter.id}
          aria-current={active === chapter.id ? 'location' : undefined}
        >
          {chapter.label}
        </a>
      ))}
    </nav>
  );
}
