import {Schema, model, models} from "mongoose";

export interface TMessage {
    _id: Schema.Types.ObjectId;
    sender: Schema.Types.ObjectId | string;
    receiver: Schema.Types.ObjectId | string;
    property: Schema.Types.ObjectId | string;
    name: string;
    email: string;
    phone: string;
    message: string;
    isRead: boolean;
    createdAt: string,
    updatedAt: string,
}


const MessageSchema: Schema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    property: {
        type: Schema.Types.ObjectId,
        ref: "Property",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
    },
    isRead: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});


export const Message = models.Message || model("Message", MessageSchema);