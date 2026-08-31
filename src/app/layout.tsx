import { Metadata } from "next";
import { Inclusive_Sans } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

const inclusiveSans = Inclusive_Sans({
  variable: "--font-inclusive-sans",
  subsets: ["latin"],
});

const paperMono = localFont({
  src: "../../public/fonts/PaperMono[wght].ttf",
  variable: "--font-paper-mono",
  weight: "100 800",
});

export const metadata: Metadata = {
  title: "Khoa Ly's Website",
  description: "Khoa Ly's Website",
  icons: {
    icon: [
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicons/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicons/android-chrome-512x512.png",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inclusiveSans.variable} ${paperMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div className="root">{children}</div>
      </body>
    </html>
  );
}
