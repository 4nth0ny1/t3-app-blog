import React from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-base-100 text-base-content">
      <footer className="footer mx-auto flex max-w-[1200px] flex-row justify-between p-10">
        <aside>
          <Link href="/">
            <Logo />
          </Link>
          <p>
            Golf Kept Simple
            <br />
            Your one-stop shop for golf tips and buying guides.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Links</h6>
          <Link href="/" className="link-hover link">
            Home
          </Link>
          <Link href="/about" className="link-hover link">
            About
          </Link>
          <Link href="/blogs" className="link-hover link">
            Blogs
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link href="/" className="link-hover link">
            Terms of use
          </Link>
          <Link href="/" className="link-hover link">
            Privacy policy
          </Link>
          <Link href="/" className="link-hover link">
            Cookie policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
