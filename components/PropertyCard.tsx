import {FaBed, FaBath, FaRulerCombined, FaMoneyBill} from "react-icons/fa"
import Link from "next/link";
import {FaLocationDot} from "react-icons/fa6";
import Image from "next/image";
import {TProperty} from "@/models/Property";

type PropertyCardProps = {
    data: TProperty;
}

const PropertyCard = ({data}:PropertyCardProps) => {

    return (
        <div className="flex flex-col items-left justify-center rounded-xl shadow-md relative">
            <Image
                src={data.images[0]}
                width={400}
                height={400}
                alt=""
                className='w-full h-auto rounded-t-xl'
            />
            <div className="h-full p-4 flex flex-col justify-center">
                <div className="text-left md:text-center lg:text-left mb-6">
                    <div className="text-gray-600">{data.type}</div>
                    <h3 className="text-xl font-bold">{data.name}</h3>
                </div>
                <h3
                    className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right"
                >
                    {/*@ts-expect-error one of the three rate is always exist*/}
                    {data.rates?.monthly ? data.rates.monthly + "$/mo" : data.rates?.weekly ? ((data.rates?.weekly* 4) +"$/mo") : ((data.rates!.nightly * 30) + "$/mo")}
                </h3>

                <div className="mb-4 flex justify-center gap-x-4 text-gray-500 md:gap-x-6">
                    <p>
                        <FaBed className={"inline mr-2"}/> {data.beds}
                        <span className="md:hidden lg:inline">Beds</span>
                    </p>
                    <p>
                        <FaBath className={"inline mr-2"}/> {data.baths}
                        <span className="md:hidden lg:inline">Baths</span>
                    </p>
                    <p>
                        <FaRulerCombined className={"inline mr-2"}/>
                        {data.square_feet} <span className="md:hidden lg:inline">sqft</span>
                    </p>
                </div>

                <div
                    className="mb-4 flex justify-center gap-4 text-green-900 text-sm lg:gap-x-6"
                >
                    {data.rates?.nightly && <p><FaMoneyBill className={"inline mr-2"}/>{data.rates.nightly}$ Nightly</p>}
                    {data.rates?.weekly && <p><FaMoneyBill className={"inline mr-2"}/>{data.rates.weekly}$ Weekly</p>}
                    {data.rates?.monthly && <p><FaMoneyBill className={"inline mr-2"}/>{data.rates.monthly}$ Monthly</p>}
                </div>

                <div className="border border-gray-100 mb-5"></div>

                <div className="mt-auto flex flex-col lg:flex-row justify-between">
                    <div className="flex items-center gap-2 mb-4 lg:mb-0">
                        <FaLocationDot
                            className="text-lg text-orange-700"
                        />
                        <span className="text-orange-700"> {data.location.city} {data.location.state} </span>
                    </div>
                    <Link
                        href={`/properties/${data._id}`}
                        className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PropertyCard;