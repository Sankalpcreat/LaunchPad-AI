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
   
    // Make the request to the OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    if (!response.choices || response.choices.length === 0) {
      throw new Error("No valid choices returned from OpenAI API.");
    }
    
    const generatedPitch = response.choices[0].message?.content?.trim() || '';

    if (!generatedPitch) {
      throw new Error("Generated pitch is empty.");
    }

    // Extract TAM, SAM, and SOM from the AI response
    const marketDataFromAI = extractMarketData(generatedPitch);

    return {
      startupName: input.startupName,
      missionStatement: input.missionStatement,
      productDetails: input.productDetails,
      targetMarket: input.targetMarket,
      pitchText: generatedPitch,
      marketData: marketDataFromAI,
    };

  } catch (error) {
    console.error("Error in generating the pitch", error);
    throw new Error("Failed to generate pitch");
  }
};

// Helper function to extract TAM, SAM, and SOM from pitch text
function extractMarketData(pitchText: string): { labels: string[], values: number[] } {
  // Extract the JSON part from the pitch text
  const jsonMatch = pitchText.match(/{[^]*?}/);
  if (!jsonMatch) {
    return { labels: ['TAM', 'SAM', 'SOM'], values: [0, 0, 0] }; // Return zeros if no match
  }

  const marketData = JSON.parse(jsonMatch[0]);
  
  const tam = parseNumberFromString(marketData.TAM);
  const sam = parseNumberFromString(marketData.SAM);
  const som = parseNumberFromString(marketData.SOM);

  return {
    labels: ['TAM', 'SAM', 'SOM'],
    values: [tam, sam, som],
  };
}

// Helper function to parse a string and convert it to a float number
function parseNumberFromString(value: string): number {
  return parseFloat(value.replace(/[^0-9.]/g, '')); // Removes currency symbols and other non-numeric characters
}

export default generatePitch;
