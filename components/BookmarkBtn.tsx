"use client";

import {Button} from "@/components/ui/button";
import {FaBookmark} from "react-icons/fa6";
import {cn} from "@/lib/utils";
import {updateBookmark} from "@/services/bookmarkServices";
import {toast} from "react-toastify";
import {useState} from "react";
import {useParams} from "next/navigation";
import {useSession} from "next-auth/react";


const BookmarkBtn = ({active}: { active: boolean }) => {
    const {id} = useParams();
    const [isActive, setActive] = useState(active);
    const session = useSession();
    console.log("session", session);

    const bookmarkHandler = async () => {
        // @ts-expect-error I add the user id in the middleware
        const update = await updateBookmark({propertyId: id as string, userId: session.data?.user?.id});
        if (update) {
            toast.success("Bookmark updated successfully.");
            setActive(prev => !prev);
        } else {
            toast.error("Error updating bookmark!");
        }
    };

    return (
        <Button
            className={cn("w-full py-2 px-4 rounded-full flex items-center justify-center  text-white font-bold transition-colors duration-500 ",
                isActive ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700")}
            onClick={bookmarkHandler}
        >
            <FaBookmark/> {isActive ? <span>Remove Bookmark</span> : <span>Bookmark Property</span>}
        </Button>
    );
};

export default BookmarkBtn;