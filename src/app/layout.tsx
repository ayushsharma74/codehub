import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import {ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton} from '@clerk/nextjs'
import NextTopLoader from 'nextjs-toploader';




const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeHub",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
        <header>
            
            
          </header>
        </header>
           <Analytics />
           <SpeedInsights />
           <NextTopLoader color="gray" showSpinner={false}/>
        <Navbar />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
