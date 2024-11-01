import {TMessage} from "@/models/Message";

const apiDomain = process.env.NEXT_PUBLIC_API_URL;

export const postMessage = async ({userId, payload}: { userId: string, payload: Partial<TMessage> }) => {
    try {
        if (!apiDomain) {
            return undefined;
        }

        const res = await fetch(`${apiDomain}/user/${userId}/message`, {
            method: "POST",
            body: JSON.stringify(payload),
        });
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in posting message by user", error);
    }
};