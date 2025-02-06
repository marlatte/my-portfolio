import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Walker's Work",
  description: "Portfolio for Walker Marlatt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-dvh flex-col antialiased`}
      >
        <Header />
        {children}
        <footer className="p-2 text-center">
          &copy; Walker Marlatt {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
