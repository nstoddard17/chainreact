// components/Layout.tsx
"use client";

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-card shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary tracking-tight">ChainReact</h1>
        <nav className="space-x-6 text-sm">
          <a href="#" className="text-muted-foreground hover:text-primary transition">Docs</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition">Pricing</a>
          <a href="#" className="text-muted-foreground hover:text-primary transition">Support</a>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-muted text-center text-sm py-4 text-muted-foreground mt-8">
        © {new Date().getFullYear()} ChainReact Inc. All rights reserved.
      </footer>
    </div>
  );
}
