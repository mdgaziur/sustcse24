import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className={"h-screen w-screen flex items-center justify-center flex-col gap-1"}>
      <h1 className="p-5">Coming soon</h1>
      <Link className="p-2 text-xl font-semibold border-1 rounded-sm hover:bg-[#e0e0e0] hover:text-[#0e0e0e] transition-all" href={"/"}>Go back to home page</Link>
    </main>
  )
}