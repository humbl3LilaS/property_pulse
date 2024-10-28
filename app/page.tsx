import Link from "next/link";

export default function Home() {
  return (
    <div className={""}>
      <h1 className={"text-5xl text-black/50"}>Welcome</h1>
        <Link href={"/properties"} className={"text-white bg-blue-100"}>Show properties</Link>
    </div>
  );
}
