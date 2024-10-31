"use client";

import {Button} from "@/components/ui/button";
import {FaBookmark} from "react-icons/fa6";

const BookmarkBtn = () => {

    return (
        <Button
            className="w-full py-2 px-4 rounded-full flex items-center justify-center bg-blue-500 text-white font-bold transition-colors duration-500  hover:bg-blue-600"
            onClick={() => {
                console.log("bookmarked");
            }}
        >
            <FaBookmark/> <span>Bookmark Property</span>
        </Button>
    );
};

export default BookmarkBtn;