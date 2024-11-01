import {TMessage} from "@/models/Message";

const apiDomain = process.env.NEXT_PUBLIC_API_URL;

export const getMessages = async (userId: string) => {
    try {
        if (!apiDomain) {
            return undefined;
        }
        const res = await fetch(`${apiDomain}/user/${userId}/message`);
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in fetching message by user", error);
    }
};

export const updateMessage = async ({userId, payload}: { userId: string, payload: Partial<TMessage> }) => {
    try {
        if (!apiDomain) {
            return undefined;
        }
        const res = await fetch(`${apiDomain}/user/${userId}/message`, {
            method: "PATCH",
            body: JSON.stringify(payload),
        });
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in updating message by user", error);
    }
};


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

export const deleteMessage = async ({userId, messageId}: { userId: string, messageId: string }) => {
    try {
        if (!apiDomain) {
            return undefined;
        }

        const res = await fetch(`${apiDomain}/user/${userId}/message`, {
            method: "DELETE",
            body: JSON.stringify({messageId}),
        });
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in posting message by user", error);
    }
};