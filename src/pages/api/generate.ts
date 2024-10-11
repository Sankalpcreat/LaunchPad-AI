import generatePitch from "@/services/pitchService";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
   try {
     const input=req.json();
     const pitch=await generatePitch(input);
 
     return NextRequest.json({message:"Pitch Generated Successfully",pitch},{status:201})
   } catch (error) {
    return NextRequest.json({message:"Failed to generate pitch error",error},{status:500})
   }

}

