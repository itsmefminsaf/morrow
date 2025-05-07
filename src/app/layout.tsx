import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Morrow",
};

const roboto = Roboto();

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-zinc-950`}>{children}</body>
    </html>
  );
};

export default RootLayout;
