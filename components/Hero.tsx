import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import PropertyTypeSelector from "@/components/PropertyTypeSelector";
import {Button} from "@/components/ui/button";

const Hero = () => {
    return (
        <section className={"py-20 mb-4 bg-blue-700"}>
            <div className={"max-w-7xl mx-auto px-4 flex flex-col items-center md:px-6 lg:px-8"}>
                <div className="text-center">
                    <h1
                        className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl"
                    >
                        Find The Perfect Rental
                    </h1>
                    <p className="my-4 text-xl text-white">
                        Discover the perfect property that suits your needs.
                    </p>
                </div>
            </div>
            <form className={"w-full max-w-2xl mt-3 mx-auto flex flex-col md:flex-row md:gap-x-4"}>
                <div className={"w-full mb-4 md:w-3/5 md:mb-0"}>
                    <Label className={"sr-only"} htmlFor={"location"}>Location</Label>
                    <Input className={"w-full px-4 py-3 rounded-lg bg-white text-gray-800"}
                           placeholder="Enter Location (City, State, Zip, etc"/>
                </div>
                <div className="w-full md:w-2/5 md:pl-2">
                    <PropertyTypeSelector/>
                </div>
                <Button type={"submit"} className={"bg-blue-500 transition-colors duration-500 hover:bg-blue-600 focus-visible:ring-gary-500"}>Search</Button>
            </form>
        </section>
    );
};

export default Hero;