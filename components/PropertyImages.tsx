import Image from "next/image";
import {cn} from "@/lib/utils";

type PropertyImagesProps = {
    images: string[]
}

const PropertyImages = ({images}: PropertyImagesProps) => {
    return (
        <section className={"p-4 bg-blue-50 md:py-20"}>
            <div className="container mx-auto">
                {images.length === 1 &&
                  <Image src={images[0]} alt={"image of property"} width={1440} height={500} className={"w-full rounded-xl"}/>}
                {
                    (images.length % 2 === 0) && <div className={"grid grid-rows-2 grid-cols-2"}>
                        {
                            images.map((image, i) => (
                                <Image src={image} alt={"image of property "} width={1440} height={500}
                                       className={"w-full h-[350px] mb-4 object-cover rounded-xl  md:mb-0 md:h-[500px]"} key={i}/>)
                            )
                        }
                  </div>
                }
                {
                    (images.length % 2 !== 0) && <div className={"md:grid grid-rows-2 grid-cols-2 gap-2 md:gap-4"}>
                        {
                            images.map((image, i) => (
                                <Image src={image} alt={"image of property "} width={1440} height={500}
                                       className={cn("w-full h-[350px] mb-4 object-cover rounded-xl  md:mb-0 md:h-[500px]", (i === 0 || i % 3 === 0) && "col-span-2")}
                                       key={i}/>)
                            )
                        }
                  </div>
                }
            </div>
        </section>
    );
};
export default PropertyImages;