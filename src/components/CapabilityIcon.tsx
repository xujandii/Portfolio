'use client';

import {
  TreeStructure,
  CursorClick,
  Path,
  MagnifyingGlass,
  Lightbulb,
} from '@phosphor-icons/react';

const capabilityIcons = {
  systems: TreeStructure,
  prototype: CursorClick,
  journey: Path,
  research: MagnifyingGlass,
  concept: Lightbulb,
};

export function CapabilityIcon({ name }: { name: keyof typeof capabilityIcons }) {
  const Icon = capabilityIcons[name];
  return (
    <Icon
      size={26}
      weight="regular"
      className="tw:block tw:shrink-0"
      aria-hidden="true"
      focusable="false"
    />
  );
}
