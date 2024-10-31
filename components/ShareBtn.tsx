import {Button} from "@/components/ui/button";
import {FaShare} from "react-icons/fa";

const ShareBtn = () => {
    return (
        <Button
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
        >
            <FaShare/> <span>Share Property</span>
        </Button>
    );
};

export default ShareBtn;