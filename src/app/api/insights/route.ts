import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/utils/connectDB";
import { saveMarketAnalysis } from "@/services/marketAnalyzer";

// Use Edge runtime
export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  try {
    // Connect to DB
    await connectDB(); // Make sure connection is established here

    // Check for POST method
    if (req.method === "POST") {
      const { startupName, industry, competitor } = await req.json();

      // Call service to save market analysis
      const analysis = await saveMarketAnalysis(startupName, industry, competitor);

      // Return success response with analysis
      return NextResponse.json(
        { message: "Market analysis saved successfully", analysis },
        { status: 201 }
      );
    } else {
      // Method not allowed
      return NextResponse.json(
        { message: "Method Not Allowed" },
        { status: 405 }
      );
    }
  } catch (error) {
    // Return error response
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
