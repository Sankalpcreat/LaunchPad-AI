import generatePitch from "@/services/pitchService";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
 
  
  try {
    const input = await req.json();
   

    const pitch = await generatePitch(input);
  

    return NextResponse.json(
      { message: "Pitch Generated Successfully", pitch , marketData: pitch.marketData},
      { status: 201 }
    );
  } catch (error) {
    console.error("Error generating pitch:", error);
    return NextResponse.json(
      { message: "Failed to generate pitch"},
      { status: 500 }
    );
  }
}
