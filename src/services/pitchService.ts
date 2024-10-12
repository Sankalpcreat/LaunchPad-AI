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
      Generate a startup pitch based on the following details:
      Startup Name: ${input.startupName}
      Mission Statement: ${input.missionStatement}
      Product Details: ${input.productDetails}
      Target Market: ${input.targetMarket || "N/A"}
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
