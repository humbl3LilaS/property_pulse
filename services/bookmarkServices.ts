const apiDomain = process.env.NEXT_PUBLIC_API_URL;

export const getUserInfo = async (id: string) => {
    try {
        if (!apiDomain) {
            return [];
        }
        const res = await fetch(`${apiDomain}/user/${id}`);
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in fetching bookmarks by user", error);
    }
};

export const updateBookmark = async (id: string) => {
    try {
        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/bookmarks`, {method: "POST", body: JSON.stringify({propertyId: id})});
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in fetching bookmarks by user", error);
    }
};
