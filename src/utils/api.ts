import axios from 'axios';

const SERP_API_KEY = '40329c5e68e4549a97bdd62d084486a2ab0bfeb91f7495ad84e63383b730d31b';
const OPENAI_API_KEY = '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';
const OPENROUTER_KEY = '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';

// Mock Competitor Data
export const searchCompetitors = async (industry: string) => {
  // Simulated delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    totalResults: 15,
    organicResults: [
      {
        title: 'TechCorp - Leading AI Solutions',
        snippet: 'Market leader in AI-powered business solutions with advanced analytics and machine learning capabilities.',
        link: 'https://techcorp.example.com',
        position: 1
      },
      {
        title: 'InnovatePro - Smart Business Tools',
        snippet: 'Innovative startup offering AI-driven market analysis and business intelligence solutions.',
        link: 'https://innovatepro.example.com',
        position: 2
      },
      {
        title: 'DataSense Analytics',
        snippet: 'Comprehensive market research and competitor analysis platform using artificial intelligence.',
        link: 'https://datasense.example.com',
        position: 3
      }
    ]
  };
};

// OpenAI Functions
export const analyzeFeasibility = async (
  idea: string, 
  trends: any, 
  competitors: any, 
  sentiment: any
) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "ft:gpt-4o-2024-08-06:personal::B1M1na8g",
      messages: [{
        role: "system",
        content: "You are an expert startup advisor analyzing business feasibility."
      }, {
        role: "user",
        content: `
          Rate this startup idea (0-10) based on:
          Idea: ${idea}
          Market Trends: ${JSON.stringify(trends)}
          Competitors: ${JSON.stringify(competitors)}
          Social Sentiment: ${JSON.stringify(sentiment)}
          
          Provide a JSON response with:
          - score (0-10)
          - breakdown (object with component scores)
          - recommendations (array of strings)
        `
      }],
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Error:', error);
    return null;
  }
};

// Mock Market News Data
export const getMarketNews = async (idea: string) => {
  // Simulated delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return JSON.stringify({
    news_items: [
      'AI Startup Funding Reaches New Heights in 2024',
      'Market Analysis Tools See 200% Growth in Adoption',
      'New AI Regulations Create Opportunities for Advisory Platforms',
      'Startup Success Rates Improve with AI-Guided Decision Making'
    ],
    market_sentiment: 'positive',
    key_developments: [
      'Increased demand for AI-powered business analytics',
      'Growing adoption of automated market research tools',
      'Rising investment in AI startups',
      'Shift towards data-driven decision making'
    ]
  });
};

// Combined Analysis
export const getComprehensiveAnalysis = async (idea: string, industry: string) => {
  try {
    // Parallel API calls
    const [competitors, news] = await Promise.all([
      searchCompetitors(industry),
      getMarketNews(idea)
    ]);

    // Analyze feasibility with collected data
    const feasibility = await analyzeFeasibility(
      idea,
      news?.market_sentiment,
      competitors,
      news?.key_developments
    );

    return {
      competitors,
      news,
      feasibility: JSON.parse(feasibility),
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Comprehensive Analysis Error:', error);
    return null;
  }
};
