import {TProperty} from "@/models/Property";

const apiDomain = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProperties(): Promise<TProperty[] | undefined> {
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