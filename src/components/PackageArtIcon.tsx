import { ArrowRight, Check, X } from '@phosphor-icons/react/ssr';

const packageArtIcons = { arrow: ArrowRight, included: Check, excluded: X };

export function PackageArtIcon({ kind }: { kind: keyof typeof packageArtIcons }) {
  const Icon = packageArtIcons[kind];
  return <Icon size={24} weight="regular" aria-hidden="true" focusable="false" />;
}
