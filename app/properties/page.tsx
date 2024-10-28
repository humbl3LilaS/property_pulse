import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function Properties() {
    return <div>
        <h1 className={"text-5xl text-black/50"}>Properties Page</h1>
        <Button><Link href={".."}>Go Home</Link></Button>
    </div>
}