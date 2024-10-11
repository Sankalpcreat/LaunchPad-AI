import mongoose, { Schema, Document } from "mongoose";

interface IFeedbackService extends Document {
    pitchId: mongoose.Schema.Types.ObjectId;
    clarityScore: number;
    structureScore: number;
    relevanceScore: number;
    persuasivenessScore: number;
    strengths?: string[];
    improvements?: string[];
}

const feedbackServiceSchema = new Schema<IFeedbackService>(
    {
        pitchId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PitchGenerator",  
            required: true,
        },
        clarityScore: {
            type: Number,
            required: true,
        },
        structureScore: {
            type: Number,
            required: true,
        },
        relevanceScore: {
            type: Number,
            required: true,
        },
        persuasivenessScore: {
            type: Number,
            required: true,
        },
        strengths: [{
            type: String,
        }],
        improvements: [{
            type: String,
        }],
    },
    { timestamps: true }
);

export default mongoose.models.FeedbackService || mongoose.model<IFeedbackService>("FeedbackService", feedbackServiceSchema);
