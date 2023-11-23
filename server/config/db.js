import mongoose from "mongoose";

// Connect to MongoDB using Mongoose

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in mongoDb ${error}`);
  }
};

export default connectDb;
