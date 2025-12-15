    import mongoose from "mongoose";
 export const connectDB = async () => {
        await mongoose.connect('mongodb+srv://indianinja008_db_user:qp8Lwy6wLIZiK0uN@cluster0.qria8up.mongodb.net/food').then(() =>console.log("db connected"));
    } 