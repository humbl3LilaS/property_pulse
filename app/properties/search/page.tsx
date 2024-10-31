import {getSearchedProperties} from "@/services/propertyServices";
import PropertyCard from "@/components/PropertyCard";
import {TProperty} from "@/models/Property";

const PropertySearchResultPage = async ({searchParams}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const params = await searchParams;
    const location = params.location as string;
    const propertyType = params.propertyType as string;
    console.log(location, propertyType);
    const searchedProperties: TProperty[] = await getSearchedProperties({
        location: location,
        propertyType: propertyType
    });
    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto px-4 py-6">
                {searchedProperties && searchedProperties.length === 0 && <p>No properties found</p>}
                {searchedProperties && searchedProperties.length > 0 &&
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {searchedProperties.map((item, index) => <PropertyCard key={index} data={item}/>)}
                  </div>
                }
            </div>
        </section>
    );
};

export default PropertySearchResultPage;