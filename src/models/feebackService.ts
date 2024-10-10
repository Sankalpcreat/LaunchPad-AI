
import mongoose,{Schema,Document} from "mongoose"

const feedbackService=mongoose.Schema(
    {

        pitchId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"PitchGenerator",
            required:true,
        },
        clarityScore:{
            types:Number,
            required:true,
        },
        structureScore:{
            types:Number,
            required:true,
        },
        relevanceScore:{
            types:Number,
            required:true,
        },
        persuasivenessScore:{
            types:Number,
            required:true,
        },
        strengths: [{
            type: String,
        }],
        improvements: [{
            type: String,
        }],

        
    },{timestamps:true})


export default mongoose.models.feedbackService || mongoose.models("feedbackService",feedbackService)