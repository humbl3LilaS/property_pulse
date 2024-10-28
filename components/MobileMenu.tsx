"use client"
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {FaGoogle} from "react-icons/fa";
import NavLink from "@/components/NavLink";

const MobileMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const menuToggler = () => {
        setMenuOpen(prev => !prev)
    }

    return (
        <div className={"md:hidden"}>
            {/*trigger*/}
            <div className='flex items-center relative z-30'>
                <Button
                    type='button'
                    id='mobile-dropdown-button'
                    className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    aria-controls='mobile-menu'
                    aria-expanded='false'
                    onClick={menuToggler}
                >
                    <span className='sr-only'>Open main menu</span>
                    <svg
                        className='block h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                </Button>
            </div>

            {/*content*/}
            {menuOpen && <div
                className='w-screen h-screen absolute inset-0 z-20 flex justify-center items-center bg-blue-100 md:hidden'
                id='mobile-menu'
            >
                <div className='flex flex-col gap-y-6 text-white font-bold'>
                    <NavLink
                        href='/'
                        className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
                        onClick={menuToggler}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        href='/properties'
                        className=' px-3 py-2  block rounded-md bg-black/50 text-black text-base font-medium transition-colors duration-500 hover:bg-gray-700 hover:text-white'
                        onClick={menuToggler}
                    >
                        Properties
                    </NavLink>
                    <NavLink
                        href='/properties/add'
                        className=' px-3 py-2  block rounded-md bg-black/50 text-black text-base font-medium transition-colors duration-500 hover:bg-gray-700 hover:text-white'
                        onClick={menuToggler}
                    >
                        Add Property
                    </NavLink>
                    <button
                        type='button'
                        className='px-3 py-2 flex items-center gap-x-4 rounded-md bg-black/50 text-black text-base font-medium transition-colors duration-500 hover:bg-gray-700 hover:text-white'
                        onClick={menuToggler}
                    >
                        <FaGoogle/>
                        <span>Login or Register</span>
                    </button>
                </div>
            </div>}
        </div>
    );
};

export default MobileMenu;