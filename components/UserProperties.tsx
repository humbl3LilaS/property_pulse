"use client";

import {deletePropertyById} from "@/services/propertyServices";
import Link from "next/link";
import Image from "next/image";
import {TProperty} from "@/models/Property";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {toast} from "react-toastify";

type UserPropertiesProps = {
    data: TProperty[]
}

const UserProperties = ({data}: UserPropertiesProps) => {
    const [properties, setProperties] = useState<TProperty[]>(data);

    const deleteHandler = async (propertyId: string) => {
        const res = await deletePropertyById(propertyId);
        if (!res) {
            toast.error("Error deleting property");
        } else {
            setProperties(properties.filter(property => property._id.toString() !== propertyId));
            toast.success("Property Deleted");
        }
    };

    return (
        <div className="md:w-3/4 md:pl-4 md:max-h-[450px] md:overflow-y-scroll">
            <h2 className="text-xl font-semibold mb-4">Your Listings</h2>
            {properties.map((item: TProperty) => <div className="mb-10" key={item?._id.toString()}>
                <Link href={`/properties/${item?._id.toString()}`}>
                    <Image
                        className="h-32 w-full rounded-md object-cover md:h-64"
                        src={item.images[0]}
                        width={1440} height={500}
                        alt="Property 1"
                    />
                </Link>
                <div className="mt-2">
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-gray-600">Address: {item.location.street} {item.location.city} {item.location.state}</p>
                </div>
                <div className="mt-2">
                    <Link href={`/properties/${item?._id.toString()}/edit`}
                          className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                    >
                        Edit
                    </Link>
                    <Button
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                        onClick={async () => await deleteHandler(item?._id.toString())}
                    >
                        Delete
                    </Button>
                </div>
            </div>)}
        </div>
    )
        ;
};

export default UserProperties;