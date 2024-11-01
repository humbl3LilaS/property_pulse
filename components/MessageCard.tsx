import Link from "next/link";
import {Schema} from "mongoose";
import MarkAsReadBtn from "@/components/MarkAsReadBtn";
import DeleteMessageBtn from "@/components/DeleteMessageBtn";


export interface TMessagePopulated {
    _id: Schema.Types.ObjectId;
    sender: Schema.Types.ObjectId;
    receiver: Schema.Types.ObjectId;
    property: { _id: Schema.Types.ObjectId, name: string };
    name: string;
    email: string;
    phone: string;
    message: string;
    isRead: boolean;
    createdAt: string,
    updatedAt: string,
}

type MessageCardProps = {
    data: TMessagePopulated;
}

const MessageCard = ({data}: MessageCardProps) => {

    return (
        <div className="my-4">
            <div
                className="relative bg-white p-4 rounded-md shadow-md border border-gray-200"
            >
                <h2 className="text-xl mb-4">
                    <span className="font-bold">Property Inquiry:</span>
                    {data.property.name}
                </h2>
                <p className="text-gray-700">
                    {data.message}
                </p>

                <ul className="mt-4">
                    <li><strong>Name:</strong> {data.name}</li>

                    <li>
                        <strong>Reply Email:</strong>
                        <Link href={`mailto:${data.email}`} className="text-blue-500">{data.email}</Link>
                    </li>
                    <li>
                        <strong>Reply Phone:</strong>
                        <a href={`tel:${data.phone}`} className="text-blue-500">{data.phone}</a
                        >
                    </li>
                    <li><strong>Received:</strong>{new Date(data.createdAt).toLocaleDateString()}</li>
                </ul>
                <MarkAsReadBtn data={data}/>
                <DeleteMessageBtn data={data}/>
            </div>
        </div>
    );
};
export default MessageCard;