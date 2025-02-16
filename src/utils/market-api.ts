import axios from 'axios';

const SERP_API_KEY = '40329c5e68e4549a97bdd62d084486a2ab0bfeb91f7495ad84e63383b730d31b';
const OPENAI_API_KEY = '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';
const OPENROUTER_API_KEY = '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';

export interface MarketAnalysis {
  feasibilityScore: number;
  breakdown: {
    marketTrends: number;
    competition: number;
    sentiment: number;
    uniqueness: number;
  };
  competitors: Array<{
    name: string;
    website: string;
    funding?: string;
    founded?: string;
    status: 'active' | 'inactive';
    marketShare?: number;
  }>;
  marketSize: {
    total: number;
    addressable: number;
    growth: number;
  };
  trends: Array<{
    keyword: string;
    growth: number;
    volume: number;
  }>;
  news: Array<{
    title: string;
    source: string;
    date: string;
    sentiment: 'positive' | 'neutral' | 'negative';
    url: string;
  }>;
  recommendations: string[];
}

export const analyzeMarket = async (
  idea: string,
  industry: string
): Promise<MarketAnalysis> => {
  try {
    // 1. Get competitor data from SerpAPI
    const competitorResponse = await axios.get(
      `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(
        `${industry} startups india`
      )}&api_key=${SERP_API_KEY}`
    );

    // 2. Get market news from OpenRouter
    const newsResponse = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'anthropic/claude-2',
        messages: [
          {
            role: 'user',
            content: `Analyze recent news and market trends for ${industry} in India, focusing on ${idea}. Return in JSON format with news items, sentiment, and key trends.`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // 3. Get feasibility analysis from OpenAI
    const feasibilityResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: `Analyze the feasibility of the following startup idea:
              Idea: ${idea}
              Industry: ${industry}
              Market: India
              
              Provide a detailed analysis including:
              1. Overall feasibility score (0-100)
              2. Breakdown of scores for:
                 - Market trends (0-100)
                 - Competition (0-100)
                 - Social sentiment (0-100)
                 - Uniqueness (0-100)
              3. Key recommendations
              
              Return as JSON.`
          }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Process and combine the data
    const competitors = competitorResponse.data.organic_results
      .slice(0, 10)
      .map((result: any) => ({
        name: result.title.split('|')[0].trim(),
        website: result.link,
        status: 'active',
        founded: `202${Math.floor(Math.random() * 4)}`,
        funding: `$${(Math.random() * 10).toFixed(1)}M`,
        marketShare: Math.random() * 15
      }));

    const newsData = JSON.parse(newsResponse.data.choices[0].message.content);
    const feasibilityData = JSON.parse(feasibilityResponse.data.choices[0].message.content);

    // Mock market size data (in billions USD)
    const marketSize = {
      total: 50 + Math.random() * 50,
      addressable: 20 + Math.random() * 30,
      growth: 15 + Math.random() * 10
    };

    // Mock trend data
    const trends = [
      { keyword: industry.toLowerCase(), growth: 25 + Math.random() * 30, volume: 100000 + Math.random() * 50000 },
      { keyword: idea.toLowerCase(), growth: 40 + Math.random() * 40, volume: 50000 + Math.random() * 25000 },
      { keyword: 'digital transformation', growth: 35 + Math.random() * 20, volume: 75000 + Math.random() * 35000 },
    ];

    return {
      feasibilityScore: feasibilityData.feasibilityScore,
      breakdown: feasibilityData.breakdown,
      competitors,
      marketSize,
      trends,
      news: newsData.news,
      recommendations: feasibilityData.recommendations
    };
  } catch (error) {
    console.error('Market Analysis Error:', error);
    throw new Error('Failed to analyze market');
  }
};
