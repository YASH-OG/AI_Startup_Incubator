# Startup AI Dashboard

This project is a comprehensive dashboard for startup analysis and validation, built with Next.js, React, and Tailwind CSS. It provides real-time metrics, market analysis, legal compliance tracking, and investor relations management.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Features](#features)
- [Configuration](#configuration)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/startup-ai-dashboard.git
   cd startup-ai-dashboard
   ```

2. Install dependencies:
    ```npm install```

3. Create a `.env.local` file to store your API keys:
    ```SERP_API_KEY=your_serp_api_key
    OPENAI_API_KEY=your_openai_api_key
    OPENROUTER_API_KEY=your_openrouter_api_key
    ```

## Usage
To start the development server, run:
    ```npm run dev```

To start the production server, run:
    ```npm start```

## Project Structure

```
├── .gitignore
├── lib/
├── next-env.d.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── public/
├── src/
│   ├── api/
│   ├── components/
│   │   ├── FinancialPulse.tsx
│   │   ├── Layout.tsx
│   │   ├── LegalCompliance.tsx
│   │   ├── MarketValidation.tsx
│   │   ├── OnboardingForm.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── financial-pulse/
│   │   ├── index.tsx
│   │   ├── investor-radar/
│   │   ├── investors/
│   │   ├── legal-compliance/
│   │   ├── market-validation/
│   │   ├── risk-horizon/
│   ├── styles/
│   │   ├── globals.css
│   ├── utils/
│   │   ├── api.ts
│   │   ├── investors-api.ts
│   │   ├── legal-api.ts
│   │   ├── market-api.ts
│   │   ├── metrics-api.ts
├── tailwind.config.js
├── tsconfig.json
```

## Features
Financial Pulse: Monitor cash reserves, burn rate, and revenue projections.
Market Validation: Analyze market trends, competitor landscape, and social sentiment.
Legal Compliance: Track compliance tasks, deadlines, and risk assessment.
Investor Relations: Manage funding rounds, valuation, and investor engagement.

## Configuration

The project uses a custom `next.config.js` to handle specific configurations:

```
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    // Required for Three.js
    config.externals.push({
      'sharp': 'commonjs sharp',
      'canvas': 'commonjs canvas'
    });
    return config;
  },
};

module.exports = nextConfig;
```

## License
This project is licensed under the MIT License.