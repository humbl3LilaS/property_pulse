import {Schema, model, Model} from "mongoose";

export interface PropertySchema {
    _id: string;
    owner: Schema.Types.ObjectId;
    name: string;
    type: string;
    description: string;
    location: {
        street: string;
        city: string;
        state: string;
        zipcode: string;
    }
    beds: number;
    baths: number;
    square_feet: number;
    amenities: string[]
    rates: {
        weekly?: number;
        monthly?: number;
        nightly?: number;
    }
    seller_info: {
        name: string;
        email: string;
        phone: string;
    },
    images: string[],
    is_featured: boolean,
    createdAt: string,
    updatedAt: string,
}

const PropertySchema = new Schema<PropertySchema>({
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipcode: {
            type: String,
        }
    },
    beds: {
        type: Number,
        required: true,
    },
    baths: {
        type: Number,
        required: true,
    },
    square_feet: {
        type: Number,
        required: true,
    },
    amenities: [{type: String}],
    rates: {
        nightly: {
            type: Number,
        },
        weekly: {
            type: Number,
        },
        monthly: {
            type: Number,
        }
    },
    seller_info: {
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
            required: true,
        }
    },
    images: [{type: String}],
    is_featured: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

export type Property = Model<PropertySchema>

const Property = model<PropertySchema, Property>("Property", PropertySchema);

export default Property;