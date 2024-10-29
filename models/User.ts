import {Schema, model, Model} from "mongoose";

interface UserSchema {
    email: Schema.Types.String;
    username: string;
    image?: string;
    bookmarks: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<UserSchema>({
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

export type User = Model<UserSchema>;

const User = model<UserSchema, User>("User", UserSchema);

export default User;