import { Try } from "@mui/icons-material";
import mongoose from "mongoose";

let isConnected = false

export const exportToDB = async () => {
    mongoose.set("strictQuery", true)
}

if (isConnected) {
    console.log("MongoDB is already connected");
    return
}

try {
    await mongoose.connect(process.env.MONGODB_URL, {
        dbName: "VibeZone",
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    isConnected = true

    console.log("MongoDB is connected");
} catch (error) {
    console.log(error);
}