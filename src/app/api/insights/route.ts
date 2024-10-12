import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { saveMarketAnalysis } from "@/services/marketAnalyzer";


export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
  
    await connectDB(); 


    if (req.method === "POST") {
      const { startupName, industry, competitor } = await req.json();


      const analysis = await saveMarketAnalysis(startupName, industry, competitor);

      
      return NextResponse.json(
        { message: "Market analysis saved successfully", analysis },
        { status: 201 }
      );
    } else {

      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }
  } catch (error) {
   
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
