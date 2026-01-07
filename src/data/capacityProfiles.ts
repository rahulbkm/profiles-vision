export interface CapacityProfile {
  id: string;
  name: string;
}

export const capacityProfilesData: CapacityProfile[] = [
  { id: 'cp1', name: 'Default Capacity' },
  { id: 'cp2', name: 'High Volume' },
  { id: 'cp3', name: 'Low Volume' },
  { id: 'cp4', name: 'Custom Capacity' },
  { id: 'cp5', name: 'Peak Hours Capacity' },
  { id: 'cp6', name: 'Off-Peak Capacity' },
  { id: 'cp7', name: 'Weekend Capacity' }
];
