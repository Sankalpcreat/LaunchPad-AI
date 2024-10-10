import PitchGenerator from "@/models/PitchGenerator";
import {OpenAI} from "openai"

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

const generatePitch=async(input:{startupName:string,missionStatement:string,productDetails:string,targetMarket?:string})=>{
    try {
        const prompt = `
        Generate a startup pitch based on the following details:
        Startup Name: ${input.startupName}
        Mission Statement: ${input.missionStatement}
        Product Details: ${input.productDetails}
        Target Market: ${input.targetMarket || "N/A"}
    `;

    const response=await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
       
        {
            role: "user",
            content:prompt,
        },
    ],

})  
        const generatePitch=response.data.choices[0].message.content.trim();

        const pitchData={
            startupName:input.startupName,
            missionStatement:input.missionStatement,
            productDetails:input.productDetails,
            targetMarket:input.targetMarket,
            pitchText:generatePitch,
            pitchType:"general",

        }
        const newPitch=PitchGenerator(pitchData)
        newPitch.save();
        return newPitch

    } catch (error) {
        console.error('Error in generating the pitch',error)
        throw new Error("failed to generate Pitch")
    }
}

export default generatePitch;

