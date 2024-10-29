"use client";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";


const ProfileMenu = () => {
    const {data: session} = useSession();
    console.log(session?.user?.image);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild={true} className={"p-0 m-0"}>
                <Button variant={"link"} className={"rounded-full"}>
                    <Image
                        className="h-10 w-10 rounded-full"
                        src={session?.user?.image ?? "/icons/profile.png"}
                        alt="profile"
                        width={30} height={30}
                    />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild={true}>
                    <Link href={"/profile"}>Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild={true}>
                    <Link href={"/profile/saved"}>Saved Properties</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild={true}>
                    <button className={"w-full"} onClick={() => signOut()}>Sign Out</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileMenu;