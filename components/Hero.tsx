import SearchForm from "@/components/SearchForm";

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
            <SearchForm/>
        </section>
    );
};

export default Hero;