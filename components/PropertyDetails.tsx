import {TProperty} from "@/models/Property";
import {FaLocationDot, FaXmark} from "react-icons/fa6";
import {FaBath, FaBed, FaCheck, FaRulerCombined} from "react-icons/fa";

type PropertyDetailsProps = {
    data: TProperty;
}

const PropertyDetails = ({data}: PropertyDetailsProps) => {
    return (
        <main>
            <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
                <div className="text-gray-500 mb-4">{data.type}</div>
                <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
                <div
                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                >
                    <FaLocationDot className={"text-orange-700 mr-2"}/>

                    <p className="text-orange-700">
                        {data.location.street} {data.location.city}, {data.location.state} {data.location.zipcode}
                    </p>
                </div>

                <h3 className="text-lg font-bold my-6 bg-gray-800 text-white p-2">
                    Rates & Options
                </h3>
                <div className="flex flex-col md:flex-row justify-around">
                    <div
                        className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                    >
                        <div className="text-gray-500 mr-2 font-bold">Nightly</div>
                        <div className="text-2xl font-bold text-blue-500">
                            {data.rates.nightly ? `$${data.rates.nightly}` :
                                <FaXmark className="text-red-700"/>}
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center mb-4 border-b border-gray-200 md:border-b-0 pb-4 md:pb-0"
                    >
                        <div className="text-gray-500 mr-2 font-bold">Weekly</div>
                        <div className="text-2xl font-bold text-blue-500">
                            {data.rates.weekly ? `$${data.rates.weekly}` :
                                <FaXmark className="text-red-700"/>}
                        </div>
                    </div>
                    <div className="flex items-center justify-center mb-4 pb-4 md:pb-0">
                        <div className="text-gray-500 mr-2 font-bold">Monthly</div>
                        <div className="text-2xl font-bold text-blue-500">
                            {data.rates.monthly ? `$${data.rates.monthly}` :
                                <FaXmark className="text-red-700"/>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Description & Details</h3>
                <div
                    className="flex justify-center gap-4 text-blue-500 mb-4 text-xl space-x-9"
                >
                    <p className={"flex items-center gap-x-1"}>
                        <FaBed/>
                        <span>{data.beds}</span>
                        <span className="hidden sm:inline">Beds</span>
                    </p>
                    <p className={"flex items-center gap-x-1"}>
                        <FaBath/>
                        <span>{data.baths}</span>
                        <span className="hidden sm:inline">Baths</span>
                    </p>
                    <p className={"flex items-center gap-x-1"}>
                        <FaRulerCombined/>
                        <span>{data.square_feet}</span>
                        <span className="hidden sm:inline">sqft</span>
                    </p>
                </div>
                <p className="text-gray-500 mb-4 text-center">
                    {data.description}
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-lg font-bold mb-6">Amenities</h3>

                <ul
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none"
                >
                    {data.amenities.map((item, idx) => <li key={idx}>
                        <FaCheck className={"mr-2 inline-block text-green-600 "}/> <span>{item}</span>
                    </li>)}

                </ul>
            </div>
            {/*todo: add map component later*/}
            {/*<div className="bg-white p-6 rounded-lg shadow-md mt-6">*/}
            {/*    <div id="map"></div>*/}
            {/*</div>*/}
        </main>
    );
};
export default PropertyDetails;