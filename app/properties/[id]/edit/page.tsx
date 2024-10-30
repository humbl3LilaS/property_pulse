import PropertyEditForm from "@/components/PropertyEditForm";
import {getPropertiesById} from "@/services/propertyServices";
import {Suspense} from "react";
import {getSessionUser} from "@/services/authServices";
import {FaExclamationTriangle} from "react-icons/fa";
import Link from "next/link";


const PropertyEditPage = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params;
    const data = await getPropertiesById(id);
    const user = await getSessionUser();

    if (data?._id.toString() !== user?.id) {
        return <section className="bg-blue-50 min-h-screen flex-grow">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <div className="flex justify-center">
                        <FaExclamationTriangle className={"text-8xl text-yellow-400"}/>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mt-4 mb-2">Not Authorized</h1>
                        <p className="text-gray-500 text-xl mb-10">
                            You Do not have authority to edit this property
                        </p>
                        <Link
                            href="/"
                            className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded"
                        >Go Home</Link
                        >
                    </div>
                </div>
            </div>
        </section>;
    }


    return (
        <section className="bg-blue-50">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <Suspense fallback={<div>loading</div>}>
                        {data && <PropertyEditForm defaultValue={data}/>}
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default PropertyEditPage;