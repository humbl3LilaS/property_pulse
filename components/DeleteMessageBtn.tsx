"use client";
import {TMessagePopulated} from "@/components/MessageCard";
import {Button} from "@/components/ui/button";
import {deleteMessage} from "@/services/messageServices";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";

type DeleteMessageBtnProps = {
    data: TMessagePopulated
}

const DeleteMessageBtn = ({data}: DeleteMessageBtnProps) => {
    const router = useRouter();

    const deleteHandler = async () => {
        const message = await deleteMessage({userId: data.receiver.toString(), messageId: data._id.toString()});
        if (!message) {
            toast.error("Error deleting message");
        } else {
            toast.success("Message deleted successfully.");
            router.refresh();
        }
    };

    return (
        <Button className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md" onClick={deleteHandler}>
            Delete
        </Button>
    );
};
export default DeleteMessageBtn;