import mongoose, { Schema, Document } from "mongoose";

interface IPitchGenerator extends Document {
    startupName: string;
    missionStatement: string;
    productDetails: string;
    targetMarket?: string;
    pitchText?: string;
    pitchType?: string;
}

const pitchGeneratorSchema = new Schema<IPitchGenerator>(
    {
        startupName: {
            type: String,
            required: true,
        },
        missionStatement: {
            type: String,
            required: true,
        },
        productDetails: {
            type: String,
            required: true,
        },
        targetMarket: {
            type: String,
        },
        pitchText: {
            type: String,
        },
        pitchType: {
            type: String,
        },
    },
    { timestamps: true }
);

export default mongoose.models.PitchGenerator || mongoose.model<IPitchGenerator>("PitchGenerator", pitchGeneratorSchema);

