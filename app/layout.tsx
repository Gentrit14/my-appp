"use client";

import './globals.css';
import MainHeader from '@/components/main-header/main-header';
import Footer from '@/components/Footer/footer';

import { useState } from "react";
import CartSidebar from "@/components/CartSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  console.log("Children type:", typeof children, "Array?", Array.isArray(children));

  return (
    <html lang="en">
      <body>
        <MainHeader onOpenCart={() => setOpen(true)} />

        {children}
        <Footer />

        {open && <CartSidebar onClose={() => setOpen(false)} />}
      </body>
    </html>
  );
}
