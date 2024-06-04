import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My first project",
  description: "This is what search engines are going to capture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-zinc-100 text-zinc-900 min-h-screen`}
       >
        <header>header</header>
        {children}
        <footer>footer</footer>
        </body>
    </html>
  );
}
