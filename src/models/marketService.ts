import mongoose, { Schema, Document } from "mongoose";

// Define the interface for the document
interface IMarketService extends Document {
  startupName: string;
  industry: string;
  competitor: string[];
  marketTrends: {
    title: string;
    url: string;
    publishedAt: Date;
    source: string;
  }[];
}

// Define the schema for market service
const marketServiceSchema = new Schema<IMarketService>(
  {
    startupName: { type: String, required: true },
    industry: { type: String, required: true },
    competitor: [{ type: String, default: [] }],
    marketTrends: [
      {
        title: { type: String, required: true },
        url: {
          type: String,
          required: true,
          validate: {
            validator: (v: string) => /^https?:\/\/[^\s]+$/.test(v), // URL validation regex
            message: props => `${props.value} is not a valid URL!`
          },
        },
        publishedAt: { type: Date, required: true },
        source: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

// Optional: Create an index for better query performance (if needed)
marketServiceSchema.index({ startupName: 1, industry: 1 }); // Example of indexing on startupName and industry

// Directly define the model on each request
const MarketService = mongoose.model<IMarketService>("MarketService", marketServiceSchema);

export default MarketService;
