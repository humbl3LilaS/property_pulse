import {Schema, model, Model} from "mongoose";

interface TUser {
    email: Schema.Types.String;
    username: string;
    image?: string;
    bookmarks: Schema.Types.ObjectId[];
    createdAt: string,
    updatedAt: string,
}

const UserSchema = new Schema<TUser>({
    email: {
        type: String,
        unique: [true, "Email already exists"],
        required: [true, "Email is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    image: {
        type: String,
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Property"
        }
    ]
}, {timestamps: true});

export type UserModel = Model<TUser>;

export const User = model<TUser, UserModel>("User", UserSchema);
