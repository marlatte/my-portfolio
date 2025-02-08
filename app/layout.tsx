import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";

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
      <body className="flex min-h-dvh flex-col antialiased">
        <Header />
        {children}
        <footer className="p-2 text-center">
          &copy; Walker Marlatt {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
