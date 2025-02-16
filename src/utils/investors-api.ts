import axios from 'axios';

const OPENAI_API_KEY = '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';

// Mock investor data for India
const INVESTORS_DATABASE = [
  {
    name: "Sequoia India",
    type: "VC",
    sectors: ["SaaS", "Fintech", "Consumer Tech", "Enterprise"],
    minTicket: "₹5 Cr",
    maxTicket: "₹100 Cr",
    portfolio: ["CRED", "Razorpay", "Meesho"],
    email: "india@sequoiacap.com",
    location: "Bangalore",
    totalInvestments: 250,
    successfulExits: 45,
    averageCheckSize: "₹20 Cr",
    investmentPreference: "Series A and above",
    recentInvestments: [
      { company: "OneCard", amount: "₹100 Cr", date: "2024" },
      { company: "Pepper Content", amount: "₹50 Cr", date: "2023" }
    ]
  },
  {
    name: "Accel India",
    type: "VC",
    sectors: ["Enterprise SaaS", "D2C", "Web3", "Healthcare"],
    minTicket: "₹3 Cr",
    maxTicket: "₹80 Cr",
    portfolio: ["Flipkart", "Freshworks", "Urban Company"],
    email: "india@accel.com",
    location: "Bangalore",
    totalInvestments: 200,
    successfulExits: 35,
    averageCheckSize: "₹15 Cr",
    investmentPreference: "Seed to Series B",
    recentInvestments: [
      { company: "BluSmart", amount: "₹75 Cr", date: "2024" },
      { company: "Zetwerk", amount: "₹120 Cr", date: "2023" }
    ]
  },
  {
    name: "Blume Ventures",
    type: "Early Stage VC",
    sectors: ["Deep Tech", "SaaS", "Consumer"],
    minTicket: "₹1 Cr",
    maxTicket: "₹40 Cr",
    portfolio: ["Unacademy", "Dunzo", "slice"],
    email: "investments@blumeventures.com",
    location: "Mumbai",
    totalInvestments: 150,
    successfulExits: 25,
    averageCheckSize: "₹8 Cr",
    investmentPreference: "Seed to Series A",
    recentInvestments: [
      { company: "Pixxel", amount: "₹30 Cr", date: "2024" },
      { company: "Euler Motors", amount: "₹25 Cr", date: "2023" }
    ]
  },
  {
    name: "Elevation Capital",
    type: "VC",
    sectors: ["Consumer Tech", "Fintech", "B2B"],
    minTicket: "₹4 Cr",
    maxTicket: "₹90 Cr",
    portfolio: ["Swiggy", "Paytm", "Urban Company"],
    email: "deals@elevation.vc",
    location: "Gurgaon",
    totalInvestments: 180,
    successfulExits: 30,
    averageCheckSize: "₹18 Cr",
    investmentPreference: "Early to Growth Stage",
    recentInvestments: [
      { company: "Spinny", amount: "₹85 Cr", date: "2024" },
      { company: "Pristyn Care", amount: "₹60 Cr", date: "2023" }
    ]
  },
  {
    name: "3State Ventures",
    type: "Micro VC",
    sectors: ["Deep Tech", "AI/ML", "Enterprise SaaS"],
    minTicket: "₹50 L",
    maxTicket: "₹5 Cr",
    portfolio: ["AIphaLogic", "DataMatrix", "CloudSecure"],
    email: "pitch@3state.vc",
    location: "Bangalore",
    totalInvestments: 45,
    successfulExits: 8,
    averageCheckSize: "₹2 Cr",
    investmentPreference: "Pre-seed to Seed",
    recentInvestments: [
      { company: "NeuralLeap", amount: "₹4 Cr", date: "2024" },
      { company: "DataSense", amount: "₹3 Cr", date: "2023" }
    ]
  }
];

export interface Investor {
  name: string;
  type: string;
  sectors: string[];
  minTicket: string;
  maxTicket: string;
  portfolio: string[];
  email: string;
  location: string;
  totalInvestments: number;
  successfulExits: number;
  averageCheckSize: string;
  investmentPreference: string;
  recentInvestments: Array<{
    company: string;
    amount: string;
    date: string;
  }>;
}

export const getInvestors = async (sector: string): Promise<Investor[]> => {
  // Filter investors by sector
  return INVESTORS_DATABASE.filter(investor => 
    investor.sectors.some(s => s.toLowerCase().includes(sector.toLowerCase()))
  );
};

export const generatePitchDeck = async (
  startup: {
    name: string;
    idea: string;
    sector: string;
    stage: string;
    metrics: any;
  },
  investor: Investor
): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: `Create a personalized pitch deck outline for ${investor.name} considering:

            Startup:
            - Name: ${startup.name}
            - Idea: ${startup.idea}
            - Sector: ${startup.sector}
            - Stage: ${startup.stage}
            - Key Metrics: ${JSON.stringify(startup.metrics)}

            Investor Details:
            - Focus Sectors: ${investor.sectors.join(', ')}
            - Investment Stage: ${investor.investmentPreference}
            - Recent Investments: ${investor.recentInvestments.map(i => i.company).join(', ')}
            - Average Check Size: ${investor.averageCheckSize}

            Create a detailed pitch deck outline that aligns with this investor's interests and investment thesis.
            Include specific slides and key points to highlight.`
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

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Pitch Deck Generation Error:', error);
    throw new Error('Failed to generate pitch deck');
  }
};
