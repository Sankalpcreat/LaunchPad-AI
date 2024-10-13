import connectDB from "@/utils/connectDB"; // Ensure this is the correct path
import { OpenAI } from "openai";
import PitchGenerator from "@/models/PitchGenerator";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generatePitch = async (input: {
  startupName: string;
  missionStatement: string;
  productDetails: string;
  targetMarket?: string;
}) => {
  await connectDB(); // Connect to the database

  try {
    const prompt = `
    Please generate a comprehensive startup pitch based on the following information:
  
    **Startup Name**: ${input.startupName}
  
    **Mission Statement**: 
    Provide a clear and compelling mission statement that explains the purpose of the startup and its long-term goals.
  
    **Product Details**: 
    Describe the product or service in detail. Focus on its unique features, benefits, and how it solves a specific problem for the target market.
  
    **Target Market** (optional): 
    Define the ideal customer or market segment for this product, including demographics, behavior, and pain points. If not provided, assume a broad market audience.
  
    Organize the pitch into the following sections:
    
    1. Intro: Introduce the startup, its vision, and what sets it apart.
    2. Problem: Clearly outline the pain points faced by the target market.
    3. Solution: Describe how the product addresses the problem and why it is a better solution than existing options.
    4. Opportunity and Market Size: Provide estimates for the total addressable market (TAM), serviceable addressable market (SAM), and serviceable obtainable market (SOM).
    5. Competitive Analysis: Identify key competitors and explain the startups unique advantages.
    6. Go-to-Market Plan: Briefly outline how the startup plans to reach its customers and drive growth.
    7. Business Model: Explain how the startup will generate revenue and sustain itself.
    8. Financial: Provide a high-level view of the startups financial projections, including growth potential and expected returns for investors.
  
    Generate a pitch that is concise, compelling, and tailored to investors or stakeholders.
  `;
  

    console.log("Generating pitch with input:", input);

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    }); 

    const generatedPitch = response.choices[0].message.content.trim();

    const pitchData = {
      startupName: input.startupName,
      missionStatement: input.missionStatement,
      productDetails: input.productDetails,
      targetMarket: input.targetMarket,
      pitchText: generatedPitch,
      pitchType: "general",
    };

    const newPitch = new PitchGenerator(pitchData);
    await newPitch.save();

    return newPitch;
  } catch (error) {
    console.error("Error in generating the pitch", error);
    throw new Error("Failed to generate pitch");
  }
};

export default generatePitch;
