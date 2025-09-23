"use client";

import { FC } from "react";
import Link from "next/link";
import Image from "next/image";


const Header: FC = () => {
  return (
    <header className="flex justify-between items-center px-10 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-purple-600">ROSA DO DESERTO</div>
      <nav className="space-x-6">
        
        <Link href="/" className="hover:text-purple-600">Home</Link>

        <Link href="/shop" className="hover:text-purple-600">Shop</Link>

        <Link href="/contact" className="hover:text-purple-600">Contact</Link>
        
      </nav>
      <Link href="/about">
      <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full">
        Informaçoes
      </button>
      </Link>
      
    </header>
  );
};

export default Header;
