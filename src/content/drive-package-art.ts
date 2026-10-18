export const drivePackageTiers = ['Basic', 'Standard', 'Premium'] as const;

export const drivePackageServices = [
  { name: 'Technical support', included: [true, true, true] },
  { name: 'Condition monitoring', included: [true, true, true] },
  { name: 'Spare parts', included: [false, true, true] },
  { name: 'Storage solutions', included: [false, true, true] },
  { name: 'Priority response', included: [false, false, true] },
] as const;
