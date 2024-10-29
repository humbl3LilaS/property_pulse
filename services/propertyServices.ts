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
        console.error(error);
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
        console.error(error);
        return undefined;
    }
}