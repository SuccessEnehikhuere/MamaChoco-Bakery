import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Navbar from "@/components/Navbar";
import HomeFooter from "@/components/HomeFooter";
import NavHeader from "@/components/NavHeader";
import ResponsiveNav from "@/components/Navigation/ResponsiveNav";


const barlow_condensed = Barlow_Condensed({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "MamaChoco Bakery",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_condensed.className}>
        {/* <NavHeader />
        <Navbar /> */}
        <ResponsiveNav />
        {children}
        {/* <HomeFooter /> */}
      </body>
    </html>
  )
}
