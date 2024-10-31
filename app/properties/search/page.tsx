import {getSearchedProperties} from "@/services/propertyServices";
import PropertyCard from "@/components/PropertyCard";
import {TProperty} from "@/models/Property";
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";
import SearchForm from "@/components/SearchForm";

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
        <section className="">
            <div className="bg-blue-700 border-t border-t-gray-500">
                <SearchForm/>
            </div>
            <div className="px-4 py-6 container-xl lg:container m-auto">
                <div className={"mb-4"}>
                    <Link href={"/properties"}
                          className={"flex items-center text-blue-500  font-semibold transition-colors duration-500 hover:text-blue-700"}>
                        <FaArrowLeft className={"inline-block mr-2"}/><span>Back to Properties</span>
                    </Link>
                    <h2 className={"mt-3 text-lg font-bold md:text-2xl  md:mt-5"}>Search Results</h2>
                </div>
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