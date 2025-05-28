"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 hidden lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="5" r="1" />
            <circle cx="19" cy="5" r="1" />
            <circle cx="5" cy="5" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="19" r="1" />
            <circle cx="19" cy="19" r="1" />
            <circle cx="5" cy="19" r="1" />
          </svg>
          <span className="sr-only">Car E-commerce</span>
        </Link>
        <div className="ml-auto flex gap-2">
          <Link
            href="/"
            className={`${pathname == "/" ? "underline underline-offset-8 text-blue-600" : null} inline-flex items-center justify-center hover:underline hover:underline-offset-8 px-4 py-2 text-sm font-medium transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/example-1"
            className={`${pathname == "/example-1" ? "underline underline-offset-8 text-blue-600" : null} inline-flex items-center justify-center hover:underline hover:underline-offset-8 px-4 py-2 text-sm font-medium transition-colors`}
          >
            Example 1
          </Link>
          <Link
            href="/example-2"
            className={`${pathname == "/example-2" ? "underline underline-offset-8 text-blue-600" : null} inline-flex items-center justify-center hover:underline hover:underline-offset-8 px-4 py-2 text-sm font-medium transition-colors`}
          >
            Example 2
          </Link>
          <Link
            href="/example-3"
            className={`${pathname == "/example-3" ? "underline underline-offset-8 text-blue-600" : null} inline-flex items-center justify-center hover:underline hover:underline-offset-8 px-4 py-2 text-sm font-medium transition-colors`}
          >
            Example 3
          </Link>
          <Link
            href="/example-4"
            className={`${pathname == "/example-4" ? "underline underline-offset-8 text-blue-600" : null} inline-flex items-center justify-center hover:underline hover:underline-offset-8 px-4 py-2 text-sm font-medium transition-colors`}
          >
            Example 4
          </Link>
        </div>
      </header>
    </div>
  );
}
