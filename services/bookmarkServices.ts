const apiDomain = process.env.NEXT_PUBLIC_API_URL;

export const updateBookmark = async ({propertyId, userId}: { propertyId: string, userId: string }) => {
    try {
        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/user/${userId}/bookmark`, {
            method: "POST",
            body: JSON.stringify({propertyId: propertyId})
        });
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in fetching bookmarks by user", error);
    }
};

export const getBookmarks = async (id: string) => {
    try {
        if (!apiDomain) {
            return [];
        }
        const res = await fetch(`${apiDomain}/user/${id}/bookmark`);
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in fetching bookmarks by user", error);
    }
};

export const getSavedProperties = async (userId: string) => {
    try {
        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/user/${userId}/saved`);
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in fetching bookmarks by user", error);
    }
};