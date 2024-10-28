import Image from "next/image";
import Link from "next/link";
import {FaGoogle} from "react-icons/fa";
import {Button} from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";


const NavBar = () => {
    return (
        <nav>
            <div className={"w-full p-4 bg-blue-700 flex justify-between items-center md:gap-x-40 md:justify-center"}>
                <MobileMenu />
                <h1 className={"flex items-center gap-x-1"}>
                    <Image src={"/icons/logo-white.png"} alt="logo" width={40} height={40}/>
                    <span className={"hidden text-bold text-2xl text-white/50 tracking-wider md:block"}>PropertyPulse</span>
                </h1>
                <ul className={"hidden  items-center gap-x-6 text-white md:flex"}>
                    <Link href="/">Home</Link>
                    <Link href="/properties">Properties</Link>
                    <Link href="/properties/add">Add</Link>
                    <Link href="/login" className={"flex items-center gap-x-2"}>
                        <FaGoogle/>
                        <span>Login or register</span>
                    </Link>
                </ul>
                <div className={"flex items-center"}>
                    <Link href="/messages" className={"p-2 block bg-black rounded-full aspect-square relative"}>
                        <svg
                            className='h-6 w-6'
                            fill='white'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            aria-hidden='true'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                            />
                        </svg>
                        <span className={"w-6 h-6 flex items-center justify-center absolute -top-2 -right-2 rounded-full  bg-red-500 text-white "}>
                            <span>2</span>
                        </span>
                    </Link>
                    <Button variant={"link"} className={"rounded-full"}>
                        <Image
                            className='h-10 w-10 rounded-full'
                            src={"/icons/profile.png"}
                            alt='profile'
                            width={30} height={30}
                        />
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;