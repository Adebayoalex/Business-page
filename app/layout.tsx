import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Montserrat, Heebo } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const heebo = Heebo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heebo',
})

export const metadata: Metadata = {
  title: "ZaBap",
  description: "Nigeria's number one company on analytics and data consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${heebo.variable} font-sans bg-gray-50 text-sm`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}