import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generatePitch = async (input: {
  startupName: string;
  missionStatement: string;
  productDetails: string;
  targetMarket?: string;
}) => {
  try {
    const prompt = `
    Please generate a comprehensive startup pitch based on the following information:

    Startup Name: ${input.startupName}

    Mission Statement: 
    ${input.missionStatement}

    Product Details: 
    ${input.productDetails}

    Target Market (optional): 
    ${input.targetMarket || 'Assume a broad market audience.'}

    Organize the pitch into the following sections:
        
    1. Intro: Introduce the startup, its vision, and what sets it apart.
    2. Problem: Clearly outline the pain points faced by the target market.
    3. Solution: Describe how the product addresses the problem and why it is a better solution than existing options.
    4. Opportunity and Market Size: Provide estimates for the total addressable market (TAM), serviceable addressable market (SAM), and serviceable obtainable market (SOM).
    5. Competitive Analysis: Identify key competitors and explain the startup's unique advantages.
    6. Go-to-Market Plan: Briefly outline how the startup plans to reach its customers and drive growth.
    7. Business Model: Explain how the startup will generate revenue and sustain itself.
    8. Financial: Provide a high-level view of the startup's financial projections, including growth potential and expected returns for investors.

    Generate a pitch that is concise, compelling, and tailored to investors or stakeholders. Additionally, please format the market-related metrics (TAM, SAM, SOM) in a structured JSON format like this:

    {
      "TAM": "TAM value",
      "SAM": "SAM value",
      "SOM": "SOM value"
    }
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      stream: true,
      temperature: 0.3,
    });

    let generatedPitch = '';
    let marketData: { label: string[]; value: number[] } = { label: [], value: [] };

    // Read the stream properly
    for await (const message of response) {
      if (message.choices && message.choices.length > 0) {
        const chunk = message.choices[0].delta.content || '';
        generatedPitch += chunk;
      }
    }

    if (!generatedPitch) {
      throw new Error('Generated Pitch Empty');
    }

    // Extract market data from the generated pitch
    marketData = extractMarketData(generatedPitch);

    return { pitchText: generatedPitch, marketData };
  } catch (error) {
    console.error('Error generating pitch:', error);
    throw new Error('Failed to generate pitch');
  }
};

// Updated extractMarketData function
function extractMarketData(pitchText: string) {
  // Basic extraction logic for TAM, SAM, and SOM values
  const marketData = { label: ['TAM', 'SAM', 'SOM'], value: [0, 0, 0] };

  const tamMatch = pitchText.match(/"TAM":\s*"(\d+(?:\.\d+)?)"/);
  const samMatch = pitchText.match(/"SAM":\s*"(\d+(?:\.\d+)?)"/);
  const somMatch = pitchText.match(/"SOM":\s*"(\d+(?:\.\d+)?)"/);

  if (tamMatch) marketData.value[0] = parseFloat(tamMatch[1]);
  if (samMatch) marketData.value[1] = parseFloat(samMatch[1]);
  if (somMatch) marketData.value[2] = parseFloat(somMatch[1]);

  return marketData;
}

export default generatePitch;
