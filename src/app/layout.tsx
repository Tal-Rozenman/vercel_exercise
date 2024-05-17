import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center h-screen">
        <div className="p-12 max-w-screen mx-auto ">
          <nav className="text-3xl font-semibold flex gap-16 mb-8">
            <a href="/">Vercel Exercise</a>
            <a href="https://www.linkedin.com/in/tal-rozenman-0b7315a1/">Tal Rozenman</a>
          </nav>
          <main>
            {children}
          </main>
        </div>
        </div>
      </body>
    </html>
  );
}
