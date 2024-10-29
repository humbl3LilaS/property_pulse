import Image from "next/image";
import Link from "next/link";
import {FaArrowLeft} from "react-icons/fa";

type PropertyHeaderImageProps = {
    image: string;
}

const PropertyHeader = ({image}: PropertyHeaderImageProps) => {
    return (
        <section>
            <div className={"container-xl m-auto"}>
                <div>
                    <Image src={image}
                           alt={"images"}
                           width={0}
                           height={0}
                           sizes={"100vw"}
                           className={"w-full h-[400px] object-cover"}
                           priority={true}/>
                    <div className={"p-6"}>
                        <Link href={"/properties"} className={"flex items-center gap-x-2 text-blue-500 transition-colors duration-500 hover:text-blue-700"}>
                            <FaArrowLeft/>
                            <span>Back to Properties</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyHeader;