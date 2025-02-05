import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ApolloWrapper } from "./components/ApolloWrapper";

export const metadata = {
  title: "Emsound mm AB",
  description: "Ljud och Ljus firma",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
      <ApolloWrapper>
        <Navbar />
        <SmoothScroll>
          <main className="min-h-screen w-full">{children}</main>
        </SmoothScroll>
        <Footer />
        </ApolloWrapper>
      </body>
    </html>
  );
}

