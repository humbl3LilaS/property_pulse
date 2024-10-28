"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";
import {ReactNode} from "react";

type NavLinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

const NavLink = ({href, children, className, onClick}: NavLinkProps) => {
    const currentPath = usePathname();

    return (
        <Link href={href} className={cn("px-4 py-2 rounded-lg", currentPath === href && "bg-black", className)}
              onClick={onClick}
        >
            {children}
        </Link>
    );
};

export default NavLink;