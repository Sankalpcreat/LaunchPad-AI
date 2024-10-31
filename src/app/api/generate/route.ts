import { NextResponse } from 'next/server';
import generatePitch from '@/services/pitchService'; // Adjust the path as necessary

export async function POST(request: Request) {
  const body = await request.json();
  
  try {
    // Call the generatePitch function
    const { pitchText, marketData } = await generatePitch(body);

    // Return the response in the expected format
    return NextResponse.json({ pitchText, marketData });
  } catch (error) {
    console.error('Error in pitch generation:', error);
    return NextResponse.json({ error: 'Failed to generate pitch' }, { status: 500 });
  }
}
