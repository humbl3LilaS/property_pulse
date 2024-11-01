"use client";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {TMessagePopulated} from "@/components/MessageCard";
import {cn} from "@/lib/utils";
import {updateMessage} from "@/services/messageServices";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

type MarkAsReadBtnProps = {
    className?: string;
    data: TMessagePopulated
}

const MarkAsReadBtn = ({className, data}: MarkAsReadBtnProps) => {
    const [isRead, setIsRead] = useState(data.isRead);
    const router = useRouter();
    console.log("mark as btn rendered");
    const handler = async () => {
        const updatedMessage = await updateMessage({
            userId: data.receiver.toString(), payload: {
                _id: data._id,
                isRead: true,
            }
        });
        if (!updatedMessage) {
            toast.error("Error marking message as read");
        } else {
            toast.success("Message marked as read.");
            setIsRead(true);
            router.refresh();
        }
    };

    return (
        <Button className={cn(className = "mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md", className)}
                disabled={isRead}
                onClick={handler}>

            Mark as read
        </Button>
    );
};
export default MarkAsReadBtn;