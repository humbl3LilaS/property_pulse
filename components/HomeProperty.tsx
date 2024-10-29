import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";
import {fetchProperties} from "@/services/propertyServices";

const HomeProperty = async () => {
    const properties = await fetchProperties();
    const recentProperties = properties ? properties.sort(() => Math.random() - Math.random()).slice(0,
        3) : [];

    return (
        <section className="px-4 py-6">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
                    Recent Properties
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recentProperties.length === 0 && <p>No Properties </p>}
                    {recentProperties.length > 0 && recentProperties.map(
                        (item, index) => (<PropertyCard key={index} data={item}/>))}
                </div>
            </div>
            <div className={"py-5 md:py-8"}>
                <Link href={"/properties"}
                      className={"block mx-auto w-fit py-4 px-6 rounded-xl bg-black text-white uppercase tracking-wide font-semibold transition-colors duration-500 hover:bg-gray-700"}>
                    View all properties
                </Link>
            </div>
        </section>
    );
};

export default HomeProperty;