export interface StartupConfig {
  idea: string;
  field: string;
  modelType: string;
  targetMarket: string;
  stage: string;
  problemStatement: string;
  targetAudience: string;
  revenue?: {
    model: string;
    initialPrice?: string;
  };
}

export const STARTUP_FIELDS = [
  { value: 'ai_ml', label: 'AI/ML' },
  { value: 'saas', label: 'SaaS' },
  { value: 'fintech', label: 'FinTech' },
  { value: 'healthtech', label: 'HealthTech' },
  { value: 'edtech', label: 'EdTech' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'iot', label: 'IoT' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'devops', label: 'DevOps' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'cleantech', label: 'CleanTech' },
  { value: 'biotech', label: 'BioTech' },
];

export const BUSINESS_MODELS = [
  { value: 'saas', label: 'SaaS (Software as a Service)' },
  { value: 'b2b', label: 'B2B (Business to Business)' },
  { value: 'b2c', label: 'B2C (Business to Consumer)' },
  { value: 'b2b2c', label: 'B2B2C (Business to Business to Consumer)' },
  { value: 'marketplace', label: 'Marketplace' },
  { value: 'subscription', label: 'Subscription Based' },
  { value: 'freemium', label: 'Freemium' },
  { value: 'usage_based', label: 'Usage Based' },
];

export const TARGET_MARKETS = [
  { value: 'india', label: 'India' },
  { value: 'sea', label: 'South East Asia' },
  { value: 'global', label: 'Global' },
  { value: 'us', label: 'United States' },
  { value: 'europe', label: 'Europe' },
];

export const STARTUP_STAGES = [
  { value: 'ideation', label: 'Ideation' },
  { value: 'validation', label: 'Validation' },
  { value: 'mvp', label: 'MVP' },
  { value: 'early_traction', label: 'Early Traction' },
  { value: 'scaling', label: 'Scaling' },
];

export const REVENUE_MODELS = [
  { value: 'subscription', label: 'Subscription Based' },
  { value: 'transactional', label: 'Transactional' },
  { value: 'advertising', label: 'Advertising' },
  { value: 'licensing', label: 'Licensing' },
  { value: 'commission', label: 'Commission Based' },
  { value: 'usage_based', label: 'Usage Based' },
];

// Example startup configurations for testing
export const EXAMPLE_CONFIGS: StartupConfig[] = [
  {
    idea: "AI-powered code review and optimization platform for developers",
    field: "ai_ml",
    modelType: "saas",
    targetMarket: "global",
    stage: "validation",
    problemStatement: "Developers spend too much time reviewing code manually and fixing common issues",
    targetAudience: "Software development teams and individual developers",
    revenue: {
      model: "subscription",
      initialPrice: "$49/month/seat"
    }
  },
  {
    idea: "IoT-based smart water management system for agriculture",
    field: "iot",
    modelType: "b2b",
    targetMarket: "india",
    stage: "mvp",
    problemStatement: "Farmers lack real-time insights for efficient water usage in agriculture",
    targetAudience: "Medium to large scale farmers and agricultural cooperatives",
    revenue: {
      model: "usage_based",
      initialPrice: "₹25,000 setup + usage"
    }
  },
  {
    idea: "Blockchain-based supply chain verification for pharmaceuticals",
    field: "blockchain",
    modelType: "b2b2c",
    targetMarket: "global",
    stage: "early_traction",
    problemStatement: "Lack of transparency and authenticity verification in pharmaceutical supply chains",
    targetAudience: "Pharmaceutical companies, distributors, and end consumers",
    revenue: {
      model: "licensing",
      initialPrice: "Custom enterprise pricing"
    }
  }
];
