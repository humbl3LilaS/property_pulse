import {TProperty} from "@/models/Property";


const apiDomain = process.env.NEXT_PUBLIC_API_URL;

export async function getAllProperties(): Promise<TProperty[] | undefined> {
    try {
        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/properties`);
        if (!res.ok) {
            return undefined;
        }
        return res.json();
    } catch (error) {
        console.error("error in fetching all properties", error);
    }
}

export async function getPropertiesById(id: string): Promise<TProperty | undefined> {
    try {
        if (!apiDomain) {
            return undefined;
        }
        const res = await fetch(`${apiDomain}/properties/${id}`);

        if (!res.ok) {
            return undefined;
        }

        return res.json();
    } catch (error) {
        console.error("error in fetching properties by ID", error);
        return undefined;
    }
}

export async function getPropertiesByUserId(userId: string) {
    try {
        if (!apiDomain) {
            return undefined;
        }
        const res = await fetch(`${apiDomain}/properties/user/${userId}`);

        if (!res.ok) {
            return undefined;
        }

        return res.json();
    } catch (error) {
        console.error("error in fetching properties by ID", error);
        return undefined;
    }
}

export async function deletePropertyById(id: string) {
    try {
        if (!apiDomain) {
            return undefined;
        }
        const res = await fetch(`${apiDomain}/properties/${id}`, {method: "DELETE"});

        if (!res.ok) {
            return undefined;
        }

        return res.json();
    } catch (error) {
        console.error("error in deleting properties by ID", error);
        return undefined;
    }
}

export async function updateProperty(id: string, payload: Partial<TProperty>) {
    try {
        if (!apiDomain) {
            return undefined;
        }
        const res = await fetch(`${apiDomain}/properties/${id}`, {method: "PATCH", body: JSON.stringify(payload)});

        if (!res.ok) {
            return undefined;
        }

        return res.json();
    } catch (error) {
        console.error("error in deleting properties by ID", error);
        return undefined;
    }
}