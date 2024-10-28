import properties from "@/properties.json"
import PropertyCard, {PropertyData} from "@/components/PropertyCard";

export default function Properties() {
    return <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
            {properties.length === 0 && <p>No properties found</p>}
            {properties.length > 0 && <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((item, index) => <PropertyCard key={index} data={item as unknown as PropertyData}/>)}
            </div>}
        </div>
    </section>
}