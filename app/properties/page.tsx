import Link from "next/link";

export default function Properties() {
    return <div>
        <h1 className={"text-5xl text-black/50"}>Properties Page</h1>
        <Link href={".."}>Go Home</Link>
    </div>
}