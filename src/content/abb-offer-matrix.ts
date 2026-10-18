import type { CaseResearchMatrixData } from './projects';

// Public-only reconstruction. Never add source labels, groupings, or a lookup key.
// Qualitative rating patterns are retained; scenario order is anonymized.
export const abbOfferMatrix: CaseResearchMatrixData = {
  id: 'quotation-matrix',
  title: 'Quote evaluation matrix',
  description:
    'Comparing perceived difficulty across the offer journey helped locate where further investigation was needed.',
  rowHeading: 'Product type',
  columns: [
    'Harvest opportunities',
    'Understand customer needs',
    'Prepare the quotation',
    'Formulate the price',
    'Approve & finalize the price',
  ],
  columnNote: {
    column: 'Formulate the price',
    text: 'Locally adapted practices',
  },
  rows: [
    { label: 'Product A', ratings: ['simple', 'simple', 'simple', 'simple', 'unknown'] },
    { label: 'Product B', ratings: ['unknown', 'simple', 'complex', 'complex', 'unknown'] },
    { label: 'Product C', ratings: ['unknown', 'simple', 'simple', 'simple', 'unknown'] },
    { label: 'Product D', ratings: ['unknown', 'simple', 'complex', 'complex', 'unknown'] },
    { label: 'Product E', ratings: ['simple', 'simple', 'complex', 'simple', 'unknown'] },
  ],
  note: 'Product types are anonymized. Ratings reflect majority of interview accounts (9 countries). Insufficient evidence indicates a need for further research.',
};
