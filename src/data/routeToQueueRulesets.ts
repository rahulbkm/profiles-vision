export interface RouteToQueueRuleset {
  id: string;
  name: string;
  url: string;
}

export const routeToQueueRulesetsData: RouteToQueueRuleset[] = [
  { id: 'rtq1', name: 'Standard Queue Routing', url: '/rules/standard-queue-routing' },
  { id: 'rtq2', name: 'Skills Queue Routing', url: '/rules/skills-queue-routing' },
  { id: 'rtq3', name: 'Digital Queue Routing', url: '/rules/digital-queue-routing' },
  { id: 'rtq4', name: 'Bot-first Routing', url: '/rules/bot-first-routing' },
  { id: 'rtq5', name: 'Priority Queue Routing', url: '/rules/priority-queue-routing' },
  { id: 'rtq6', name: 'Custom Queue Routing', url: '/rules/custom-queue-routing' },
  { id: 'rtq7', name: 'Round Robin Queue Routing', url: '/rules/round-robin-routing' },
  { id: 'rtq8', name: 'Load Balanced Routing', url: '/rules/load-balanced-routing' },
  { id: 'rtq9', name: 'Time-based Routing', url: '/rules/time-based-routing' },
  { id: 'rtq10', name: 'Geographic Routing', url: '/rules/geographic-routing' }
];
