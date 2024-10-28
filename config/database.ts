import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
    mongoose.set("strictQuery", true);

    if (connected) {
        console.log("MongoDB is already connected");
        return;
    }

    try {
        // @ts-expect-error env will always exits
        await mongoose.connect(process.env.MONGO_DB_URI);
        connected = true;
        console.log("MongoDB is connected");
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(err);
        }
    }
};

export default connectDB;