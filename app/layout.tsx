"use client";

import Header from "../_components/header";
import Footer from "../_components/footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  if (pathname != "/success")
    return (
      <html>
        <head />
        <body>
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
