// components/Layout.tsx
"use client";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 tracking-tight">ChainReact</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Docs</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition">Support</a>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-gray-100 text-center text-sm py-4 text-gray-500 mt-8">
        © {new Date().getFullYear()} ChainReact Inc. All rights reserved.
      </footer>
    </div>
  );
}
