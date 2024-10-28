import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4 mt-24">
            <div
                className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
            >
                <div className="mb-4 md:mb-0">
                    <Image src="/icons/logo.png" alt="Logo" className="h-8 w-auto" width={50} height={50} />
                </div>
                <div>
                    <p className="text-sm text-gray-500 mt-2 md:mt-0">
                        &copy; {new Date().getFullYear()} PropertyPulse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;