import mongoose from "mongoose";

// Define a Mongoose schema
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    answer: { type: String, required: true },
    role: { type: Number, default: 0 },
    //   createdAt: { type: Date, default: Date.now }, this is similar to timestamp
  },
  { timestamps: true }
);

// Create a Mongoose model named 'User' based on the userSchema
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;
