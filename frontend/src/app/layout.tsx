import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import QueryProvider from './QueryProvider';

const roboto = Roboto({
  weight: '500',
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Google Front Page",
  description: "Alright Coding Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <QueryProvider>
          <div className="font-sans bg-[#202124] text-[#e8eaed] flex flex-col h-screen">
            <NavBar />
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
