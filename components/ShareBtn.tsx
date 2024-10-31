"use client";
import {useParams} from "next/navigation";
import {
    FacebookIcon,
    FacebookShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton
} from "react-share";
import {TProperty} from "@/models/Property";

type ShareBtnProps = {
    property: TProperty;
}

const ShareBtn = ({property}: ShareBtnProps) => {
    const {id} = useParams();
    const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${id}`;
    return (
        <div>
            <h3 className={"p-2 text-xl font-bold text-center"}>Share This Property</h3>
            <div className={"py-4 flex gap-x-3 justify-center"}>
                <FacebookShareButton url={shareUrl} hashtag={`#${property.type} for rent`} content={property.name}>
                    <FacebookIcon size={40} round={true}/>
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl}  content={shareUrl}>
                    <TwitterIcon size={40} round={true}/>
                </TwitterShareButton>
                <TelegramShareButton url={shareUrl} content={shareUrl}>
                    <TelegramIcon size={40} round={true}/>
                </TelegramShareButton>
            </div>
        </div>
    );
};

export default ShareBtn;