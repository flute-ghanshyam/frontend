"use client"; // Needed for navigation with App Router

import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#333",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>MyLogo</div>
      <nav>
        <ul style={{ display: "flex", listStyle: "none", gap: "1rem" }}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
