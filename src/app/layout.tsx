import type { Metadata } from "next";
import { Alice, Inclusive_Sans } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const alice = Alice({
  weight: "400",
  subsets: ["latin"],
});

const inclusiveSans = Inclusive_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inclusive-sans",
});

export const metadata: Metadata = {
  title: "Khoa Ly",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alice.className} ${inclusiveSans.variable} relative`}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
