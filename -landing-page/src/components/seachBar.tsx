"use client";
import Link from "next/link";

export default function SeachrBar() {
  return (
    <aside className="menu white-bg">
      <div className="main-content menu-content">
        <h1>
          <Link href="/">LOGO</Link>
        </h1>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
