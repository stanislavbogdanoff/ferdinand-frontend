"use client";

import { useEffect } from "react";
import Head from "next/head";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { usePathname } from "next/navigation";
import loader from "./loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);
  if (pathname != "/success")
    return (
      <html>
        <head />
        <body>
          <div id={"globalLoader"}>
            <div className="loader">
              <div />
              <div />
            </div>
          </div>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  else {
    return (
      <html>
        <head />
        <body>{children}</body>
      </html>
    );
  }
}
