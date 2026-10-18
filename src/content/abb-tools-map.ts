import type { CaseToolsMapData } from './projects';

// Public reconstruction of reported usage spans. Keep identities and lookup keys out.
export const abbToolsMap: CaseToolsMapData = {
  id: 'tools-systems-map',
  title: 'Tools and systems across the offer creation journey',
  description:
    'From the existing material and interview findings, I mapped where tools appeared in the workflow made overlaps and handoffs visible. The bands show reported use across stages; they do not imply automatic integration between systems.',
  stages: [
    'Harvest opportunities',
    'Understand customer needs',
    'Prepare the quotation',
    'Formulate the price',
    'Approve the price',
    'Negotiate with the customer',
    'Amend the quotation',
    'Manage documents',
    'Close the agreement',
    'Create the order',
  ],
  tools: [
    { label: 'System A', from: 1, to: 10 },
    { label: 'System B', from: 3, to: 10 },
    { label: 'Tool C', from: 3, to: 10 },
    { label: 'Tool D', from: 3, to: 10 },
    { label: 'Tool E', from: 3, to: 10 },
    { label: 'Tool F', from: 4, to: 7 },
    { label: 'System G', from: 1, to: 3 },
  ],
  note: 'Tool and system names are anonymized. This is a generalized view of reported use, not a technical architecture or a complete inventory.',
};
