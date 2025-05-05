import Link from "next/link";

export default function NavBar({classes, linkClasses}: { classes?: string, linkClasses?: string }) {
  return (
    <nav
      className={`p-5 gap-5 flex flex-wrap justify-center w-full font-semibold text-foreground-secondary ${classes}`}>
      <Link className={`${linkClasses} md:text-[16px] text-[12px]`} href="/">Home</Link>
      <Link className={`${linkClasses} md:text-[16px] text-[12px]`} href="/curriculum">Curriculum</Link>
      <Link className={`${linkClasses} md:text-[16px] text-[12px]`} href="/books-and-resources">Books and
        Resources</Link>
      <Link className={`${linkClasses} md:text-[16px] text-[12px]`} href="/coming-soon">Events</Link>
    </nav>
  );
}