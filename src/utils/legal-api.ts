import axios from 'axios';

const OPENAI_API_KEY = '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';

interface ComplianceTask {
  id: string;
  title: string;
  deadline: string;
  status: 'pending' | 'completed' | 'overdue';
  priority: 'high' | 'medium' | 'low';
  penalty: string;
  description: string;
}

export const analyzeLegalCompliance = async (
  companyType: string,
  stage: string,
  location: string
) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "ft:gpt-4o-2024-08-06:personal::B1M1na8g",
      messages: [{
        role: "system",
        content: "You are a legal compliance expert for startups. Provide detailed compliance requirements and deadlines."
      }, {
        role: "user",
        content: `
          Analyze legal compliance requirements for:
          Company Type: ${companyType}
          Stage: ${stage}
          Location: ${location}
          
          Provide a JSON response with:
          - risk_score (0-100)
          - compliance_tasks (array of tasks with deadlines)
          - required_documents (array of necessary filings)
          - regulatory_updates (array of recent changes)
          - recommendations (array of action items)
        `
      }],
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return JSON.parse(response.data.choices[0].message.content);
  } catch (error) {
    console.error('Legal Analysis Error:', error);
    return null;
  }
};

export const generateLegalDocument = async (
  documentType: string,
  companyDetails: any
) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "ft:gpt-4o-2024-08-06:personal::B1M1na8g",
      messages: [{
        role: "system",
        content: "You are a legal document generator for startups."
      }, {
        role: "user",
        content: `
          Generate a ${documentType} for:
          ${JSON.stringify(companyDetails, null, 2)}
          
          Provide a JSON response with:
          - document_text (formatted legal text)
          - required_signatures (array of required signatories)
          - filing_instructions (steps to file)
          - additional_notes (important considerations)
        `
      }],
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    return JSON.parse(response.data.choices[0].message.content);
  } catch (error) {
    console.error('Document Generation Error:', error);
    return null;
  }
};

export const trackComplianceDeadlines = (tasks: ComplianceTask[]) => {
  const now = new Date();
  
  return tasks.map(task => {
    const deadline = new Date(task.deadline);
    const daysUntilDeadline = Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    return {
      ...task,
      daysRemaining: daysUntilDeadline,
      status: task.status === 'completed' ? 'completed' :
        daysUntilDeadline < 0 ? 'overdue' : 'pending'
    };
  });
};
