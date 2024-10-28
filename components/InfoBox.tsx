import {cn} from "@/lib/utils";
import Link from "next/link";

type InfoProps = {
    heading: string;
    className?: string;
    content: string;
    buttonInfo: { href: string, text: string, className?: string };
}

const InfoBox = ({heading,content, className, buttonInfo}: InfoProps) => {
    return (
        <div className={cn("p-6 rounded-lg bg-gray-100  shadow-md", className)}>
            <h2 className="text-2xl font-bold">{heading}</h2>
            <p className="mt-2 mb-4">
                {content}
            </p>
            <Link
                href={buttonInfo.href}
                className={cn("px-4 py-2 inline-block bg-black rounded-lg text-white transition-colors duration-500 hover:bg-gray-700", buttonInfo.className)}
            >
                {buttonInfo.text}
            </Link>
        </div>
    );
};

export default InfoBox;