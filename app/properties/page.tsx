import PropertyCard from "@/components/PropertyCard";
import {getAllProperties} from "@/services/propertyServices";



export default async function Properties() {
    const properties = await getAllProperties();

    return <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
            {properties && properties.length === 0 && <p>No properties found</p>}
            {properties && properties.length > 0 && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((item, index) => <PropertyCard key={index} data={item}/>)}
            </div>}
        </div>
    </section>;
}