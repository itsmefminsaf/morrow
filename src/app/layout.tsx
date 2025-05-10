import { Roboto } from "next/font/google";
import "./globals.css";
import React from "react";

const roboto = Roboto();

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-zinc-950`}>{children}</body>
    </html>
  );
};

export default RootLayout;
