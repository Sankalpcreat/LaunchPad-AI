import mongoose, { Schema, Document } from "mongoose";

interface IMarketService extends Document {
    startupName: string;
    industry: string;
    competitor: string[];
    marketTrends: string;
}

const marketServiceSchema = new Schema<IMarketService>(
    {
        startupName: {
            type: String,
            required: true,
        },
        industry: {
            type: String,
            required: true,
        },
        competitor: [{
            type: String,
        }],
        marketTrends: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.MarketService || mongoose.model<IMarketService>("MarketService", marketServiceSchema);
