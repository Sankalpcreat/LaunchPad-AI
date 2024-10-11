import { saveMarketAnalysis } from "@/services/marketAnalyzer";
import { NextRequest } from 'next/server'

export  async function POST(req:NextRequest){
    try {
        const {startupName,industry,competitor}=await req.json();
        const analysis=await saveMarketAnalysis(startupName,industry,competitor);
        return  NextRequest.json({message:"Market analysis saved Successfully",analysis},{status:201})
    } catch (error) {
        return NextResponse.json({ message: "Failed to analyze market", error }, { status: 500 });
  
    }
}