import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
};

export function Navbar() {
  return (
    <nav className="py-5 mb-12 lg:mb-16">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row items-center gap-4 mt-6 md:mt-0 md:ml-auto">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="relative flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
