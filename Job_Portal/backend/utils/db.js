import mongoose from "mongoose";
import dns from "dns";

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jobportal';
    if (!process.env.MONGO_URI) {
        console.warn('MONGO_URI is not set in .env. Falling back to local MongoDB.');
    }
    try {
        dns.setServers(["8.8.8.8", "8.8.4.4"]);
        await mongoose.connect(mongoUri);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message || error);
        throw error;
    }
};
export default connectDB;