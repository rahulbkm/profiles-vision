export interface WorkClassificationRuleset {
  id: string;
  name: string;
  url: string;
}

export interface RoutingProfile {
  id: string;
  name: string;
  description: string;
  configurations: {
    // 1. Work classification (optional) - up to 10 rulesets with hyperlinks
    workClassification: WorkClassificationRuleset[];
    
    // 2. Route to queue rules - hyperlink to the ruleset
    routeToQueueRules: {
      id: string;
      name: string;
      url: string;
    } | null;
    
    // 3. Fallback queue - single queue selection from contact center
    fallbackQueue: string;
    
    // 4. Rule-hit policy - 'hit-first' or 'hit-all'
    ruleHitPolicy: 'hit-first' | 'hit-all';
    
    // 5. Work distribution settings
    workDistributionSettings: {
      // 5.1 Work distribution mode - 'push' or 'pick'
      workDistributionMode: 'push' | 'pick';
      
      // 5.2 Capacity profile - dropdown selection
      capacityProfile: string;
      
      // 5.3 Allowed presences - multi-select from available, busy, DND, offline
      allowedPresences: ('available' | 'busy' | 'DND' | 'offline')[];
      
      // 5.4 Default skill matching algorithm - closest match, exact match, or none
      defaultSkillMatchingAlgorithm: 'closest-match' | 'exact-match' | 'none';
      
      // 5.5 After call work - always block, do not block, or custom time
      afterCallWork: {
        mode: 'always-block' | 'do-not-block' | 'custom-time';
        customTimeSeconds?: number;
      };
    };
  };
}

export const routingProfilesData: RoutingProfile[] = [
  {
    id: '1',
    name: 'Default routing profile',
    description: 'Standard routing configuration',
    configurations: {
      workClassification: [
        { id: 'wc1', name: 'Priority Classification', url: '/rules/priority-classification' },
        { id: 'wc2', name: 'Customer Type Classification', url: '/rules/customer-type' }
      ],
      routeToQueueRules: {
        id: 'rtq1',
        name: 'Standard Queue Routing',
        url: '/rules/standard-queue-routing'
      },
      fallbackQueue: 'General Support Queue',
      ruleHitPolicy: 'hit-first',
      workDistributionSettings: {
        workDistributionMode: 'push',
        capacityProfile: 'Default Capacity',
        allowedPresences: ['available', 'busy'],
        defaultSkillMatchingAlgorithm: 'closest-match',
        afterCallWork: {
          mode: 'always-block',
          customTimeSeconds: undefined
        }
      }
    }
  },
  {
    id: '2',
    name: 'Standard routing profile',
    description: 'Commonly used routing settings',
    configurations: {
      workClassification: [
        { id: 'wc3', name: 'Skill-based Classification', url: '/rules/skill-based' }
      ],
      routeToQueueRules: {
        id: 'rtq2',
        name: 'Skills Queue Routing',
        url: '/rules/skills-queue-routing'
      },
      fallbackQueue: 'Overflow Queue',
      ruleHitPolicy: 'hit-all',
      workDistributionSettings: {
        workDistributionMode: 'pick',
        capacityProfile: 'High Volume',
        allowedPresences: ['available'],
        defaultSkillMatchingAlgorithm: 'exact-match',
        afterCallWork: {
          mode: 'custom-time',
          customTimeSeconds: 120
        }
      }
    }
  },
  {
    id: '3',
    name: 'Test routing profile',
    description: 'Routing configuration for testing',
    configurations: {
      workClassification: [],
      routeToQueueRules: null,
      fallbackQueue: 'Test Queue',
      ruleHitPolicy: 'hit-first',
      workDistributionSettings: {
        workDistributionMode: 'push',
        capacityProfile: 'Low Volume',
        allowedPresences: ['available', 'busy', 'DND', 'offline'],
        defaultSkillMatchingAlgorithm: 'none',
        afterCallWork: {
          mode: 'do-not-block',
          customTimeSeconds: undefined
        }
      }
    }
  },
  {
    id: '4',
    name: 'Digital routing profile',
    description: 'Optimized for digital channels',
    configurations: {
      workClassification: [
        { id: 'wc4', name: 'Digital Channel Classification', url: '/rules/digital-channel' },
        { id: 'wc5', name: 'VIP Customer Identification', url: '/rules/vip-customers' },
        { id: 'wc6', name: 'Issue Severity Classification', url: '/rules/issue-severity' }
      ],
      routeToQueueRules: {
        id: 'rtq3',
        name: 'Digital Queue Routing',
        url: '/rules/digital-queue-routing'
      },
      fallbackQueue: 'Digital Support Queue',
      ruleHitPolicy: 'hit-first',
      workDistributionSettings: {
        workDistributionMode: 'push',
        capacityProfile: 'High Volume',
        allowedPresences: ['available', 'busy'],
        defaultSkillMatchingAlgorithm: 'closest-match',
        afterCallWork: {
          mode: 'custom-time',
          customTimeSeconds: 180
        }
      }
    }
  },
  {
    id: '5',
    name: 'Deflection routing profile',
    description: 'Routing with deflection capabilities',
    configurations: {
      workClassification: [
        { id: 'wc7', name: 'Self-service Eligibility', url: '/rules/self-service' }
      ],
      routeToQueueRules: {
        id: 'rtq4',
        name: 'Bot-first Routing',
        url: '/rules/bot-first-routing'
      },
      fallbackQueue: 'Deflection Queue',
      ruleHitPolicy: 'hit-all',
      workDistributionSettings: {
        workDistributionMode: 'push',
        capacityProfile: 'Default Capacity',
        allowedPresences: ['available'],
        defaultSkillMatchingAlgorithm: 'none',
        afterCallWork: {
          mode: 'always-block',
          customTimeSeconds: undefined
        }
      }
    }
  },
  {
    id: '6',
    name: 'PN routing profile',
    description: 'Priority notification routing',
    configurations: {
      workClassification: [
        { id: 'wc8', name: 'Urgency Classification', url: '/rules/urgency' },
        { id: 'wc9', name: 'Account Value Classification', url: '/rules/account-value' }
      ],
      routeToQueueRules: {
        id: 'rtq5',
        name: 'Priority Queue Routing',
        url: '/rules/priority-queue-routing'
      },
      fallbackQueue: 'PN Queue',
      ruleHitPolicy: 'hit-first',
      workDistributionSettings: {
        workDistributionMode: 'pick',
        capacityProfile: 'Low Volume',
        allowedPresences: ['available', 'busy'],
        defaultSkillMatchingAlgorithm: 'exact-match',
        afterCallWork: {
          mode: 'custom-time',
          customTimeSeconds: 300
        }
      }
    }
  },
  {
    id: '7',
    name: 'Custom routing profile',
    description: 'Fully customized routing settings',
    configurations: {
      workClassification: [
        { id: 'wc10', name: 'Custom Classification 1', url: '/rules/custom-1' },
        { id: 'wc11', name: 'Custom Classification 2', url: '/rules/custom-2' },
        { id: 'wc12', name: 'Custom Classification 3', url: '/rules/custom-3' }
      ],
      routeToQueueRules: {
        id: 'rtq6',
        name: 'Custom Queue Routing',
        url: '/rules/custom-queue-routing'
      },
      fallbackQueue: 'Custom Queue',
      ruleHitPolicy: 'hit-all',
      workDistributionSettings: {
        workDistributionMode: 'push',
        capacityProfile: 'Custom Capacity',
        allowedPresences: ['available', 'busy', 'DND'],
        defaultSkillMatchingAlgorithm: 'closest-match',
        afterCallWork: {
          mode: 'custom-time',
          customTimeSeconds: 240
        }
      }
    }
  }
];
