export interface WorkClassificationRuleset {
  id: string;
  name: string;
  url: string;
}

export const workClassificationRulesetsData: WorkClassificationRuleset[] = [
  { id: 'wc1', name: 'Priority Classification', url: '/rules/priority-classification' },
  { id: 'wc2', name: 'Customer Type Classification', url: '/rules/customer-type' },
  { id: 'wc3', name: 'Skill-based Classification', url: '/rules/skill-based' },
  { id: 'wc4', name: 'Digital Channel Classification', url: '/rules/digital-channel' },
  { id: 'wc5', name: 'VIP Customer Identification', url: '/rules/vip-customers' },
  { id: 'wc6', name: 'Issue Severity Classification', url: '/rules/issue-severity' },
  { id: 'wc7', name: 'Self-service Eligibility', url: '/rules/self-service' },
  { id: 'wc8', name: 'Urgency Classification', url: '/rules/urgency' },
  { id: 'wc9', name: 'Account Value Classification', url: '/rules/account-value' },
  { id: 'wc10', name: 'Custom Classification 1', url: '/rules/custom-1' },
  { id: 'wc11', name: 'Custom Classification 2', url: '/rules/custom-2' },
  { id: 'wc12', name: 'Custom Classification 3', url: '/rules/custom-3' },
  { id: 'wc13', name: 'Language-based Classification', url: '/rules/language-based' },
  { id: 'wc14', name: 'Region-based Classification', url: '/rules/region-based' },
  { id: 'wc15', name: 'Product-based Classification', url: '/rules/product-based' }
];
