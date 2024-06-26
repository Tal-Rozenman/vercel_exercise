import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tal Rozenman Vercel Exercises",
  description: "Tal Rozenman Vercel Exercises",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className="flex justify-center h-screen">
        <div className="p-12 max-w-5xl mx-auto">
          <nav className="text-2xl font-semibold flex justify-center gap-12 mb-10">
            <a href="/">Vercel Exercises</a>
            <a href="https://www.linkedin.com/in/tal-rozenman-0b7315a1/">Tal Rozenman</a>
          </nav>
          <main className="pb-12">
            {children}
          </main>
        </div>
        </div>
      </body>
    </html>
  );
}
