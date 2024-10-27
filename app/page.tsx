import Link from "next/link";

export default function Home() {
  return (
    <div className={"p-6"}>
      <h1 className={"text-5xl text-black/50"}>Welcome</h1>
        <Link href={"/properties"}>Show properties</Link>
    </div>
  );
}
