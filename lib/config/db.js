import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://arpit562005:banna420@cluster0.qaa02dh.mongodb.net/blog-app')
    console.log("DB Connected")
}