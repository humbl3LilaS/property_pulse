import PropertyEditForm from "@/components/PropertyEditForm";
import {getPropertiesById} from "@/services/propertyServices";
import {Suspense} from "react";


const PropertyEditPage = async ({params}: { params: Promise<{ id: string }> }) => {
    const {id} = await params;
    const data = await getPropertiesById(id);
    console.log(data);

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