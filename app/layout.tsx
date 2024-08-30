import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const font = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Website",
  description: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
