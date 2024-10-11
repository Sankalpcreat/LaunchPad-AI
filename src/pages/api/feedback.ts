import {saveFeedback} from '@/services/feedbackEvaluation'
import { NextRequest } from 'next/server'

export async function POST(req:NextRequest){
    return await saveFeedback(req)
}