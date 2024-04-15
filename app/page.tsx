import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-5xl font-bold">Hello, World</h1>

      <Link href={"/about"}> About page</Link>
    </main>
  );
}
