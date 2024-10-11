import { NextResponse } from "next/server";
import PitchGenerator from "@/models/PitchGenerator";
import FeedbackService from "@/models/feebackService";
import connectDB from '@/utils/connectDB'


export async function POST(req:request){
    try {
        const {pitchId,clarityScore,structureScore,relevanceScore,persuasivenessScore,strengths,improvements}= await req.json();

        if(!pitchId || !clarityScore || !structureScore || !relevanceScore || !persuasivenessScore){
            return NextResponse.json({message:"All scores are required"},{status:400})
        }

       await connectDB();
       const pitch=await PitchGenerator.findById(pitchId);
       if(!pitch){
        return NextResponse.json({message:"Pitch not found"},{status:404});
       }

       const feedback=new FeedbackService({
        pitchId,
        clarityScore,
        structureScore,
        relevanceScore,
        persuasivenessScore,
        strengths: strengths || [],
        improvements: improvements || [],

       })
     await  feedback.save()
     return NextResponse.json({message:"Feedback save successfully",feedback},{status:201})

    } catch (error) {
        console.error("Error saving feedback:", error);
    return NextResponse.json({ message: "Failed to save feedback", error }, { status: 500 });
    }
}