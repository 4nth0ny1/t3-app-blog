import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="bg-base-100">
      <div className="navbar mx-auto max-w-[1200px]">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            Golf Mastery
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <div className="hidden md:block">
              <div className="flex flex-row">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
              </div>
            </div>
            <li className="md:hidden">
              <details>
                <summary>
                  <RxHamburgerMenu />
                </summary>
                <ul className="rounded-t-none bg-base-100 p-2">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
