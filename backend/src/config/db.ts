import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('db connected!');
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}