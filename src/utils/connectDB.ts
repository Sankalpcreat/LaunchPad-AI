import mongoose from 'mongoose'


const connectDB=async()=>{
    try {
        const MONGO_URI = process.env.MONGO_URI
    
        await mongoose.connect(MONGO_URI)
        console.log("mongodb connected successfully");
    } catch (error) {
        console.error('Mongodb connection Error',error)
        process.exit(1);
    }
}
export default connectDB

