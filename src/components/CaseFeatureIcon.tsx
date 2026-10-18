import {
  MagnifyingGlass,
  Calculator,
  ArrowsLeftRight,
  Lightbulb,
  Info,
} from '@phosphor-icons/react/ssr';
import type { CaseFeatureIconName } from '@/content/projects';

const caseFeatureIcons = {
  research: MagnifyingGlass,
  pricing: Calculator,
  connections: ArrowsLeftRight,
  ideas: Lightbulb,
  information: Info,
};

export function CaseFeatureIcon({ name }: { name: CaseFeatureIconName }) {
  const Icon = caseFeatureIcons[name];
  return <Icon size={24} weight="regular" aria-hidden="true" focusable="false" />;
}
