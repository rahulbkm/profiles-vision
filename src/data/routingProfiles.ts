export interface RoutingProfile {
  id: string;
  name: string;
  description: string;
  configurations: {
    routingMethod: string;
    fallbackQueue: string;
    priorityLevel: string;
    workDistributionMode: string;
    capacityPerAgent: number;
    presenceBasedRouting: boolean;
    skillBasedRouting: boolean;
  };
}

export const routingProfilesData: RoutingProfile[] = [
  {
    id: '1',
    name: 'Default routing profile',
    description: 'Standard routing configuration',
    configurations: {
      routingMethod: 'Round Robin',
      fallbackQueue: 'General Support Queue',
      priorityLevel: 'Medium',
      workDistributionMode: 'Auto-accept',
      capacityPerAgent: 5,
      presenceBasedRouting: true,
      skillBasedRouting: false
    }
  },
  {
    id: '2',
    name: 'Standard routing profile',
    description: 'Commonly used routing settings',
    configurations: {
      routingMethod: 'Longest Idle',
      fallbackQueue: 'Overflow Queue',
      priorityLevel: 'Medium',
      workDistributionMode: 'Manual-accept',
      capacityPerAgent: 3,
      presenceBasedRouting: true,
      skillBasedRouting: true
    }
  },
  {
    id: '3',
    name: 'Test routing profile',
    description: 'Routing configuration for testing',
    configurations: {
      routingMethod: 'Round Robin',
      fallbackQueue: 'Test Queue',
      priorityLevel: 'Low',
      workDistributionMode: 'Auto-accept',
      capacityPerAgent: 10,
      presenceBasedRouting: false,
      skillBasedRouting: false
    }
  },
  {
    id: '4',
    name: 'Digital routing profile',
    description: 'Optimized for digital channels',
    configurations: {
      routingMethod: 'Skills-based',
      fallbackQueue: 'Digital Support Queue',
      priorityLevel: 'High',
      workDistributionMode: 'Auto-accept',
      capacityPerAgent: 7,
      presenceBasedRouting: true,
      skillBasedRouting: true
    }
  },
  {
    id: '5',
    name: 'Deflection routing profile',
    description: 'Routing with deflection capabilities',
    configurations: {
      routingMethod: 'Bot-first',
      fallbackQueue: 'Deflection Queue',
      priorityLevel: 'Medium',
      workDistributionMode: 'Auto-accept',
      capacityPerAgent: 4,
      presenceBasedRouting: true,
      skillBasedRouting: false
    }
  },
  {
    id: '6',
    name: 'PN routing profile',
    description: 'Priority notification routing',
    configurations: {
      routingMethod: 'Priority-based',
      fallbackQueue: 'PN Queue',
      priorityLevel: 'High',
      workDistributionMode: 'Manual-accept',
      capacityPerAgent: 3,
      presenceBasedRouting: true,
      skillBasedRouting: true
    }
  },
  {
    id: '7',
    name: 'Custom routing profile',
    description: 'Fully customized routing settings',
    configurations: {
      routingMethod: 'Custom',
      fallbackQueue: 'Custom Queue',
      priorityLevel: 'Medium',
      workDistributionMode: 'Manual-accept',
      capacityPerAgent: 6,
      presenceBasedRouting: true,
      skillBasedRouting: true
    }
  }
];
