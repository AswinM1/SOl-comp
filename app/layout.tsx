import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootProvider } from "fumadocs-ui/provider/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sol Components",
  description:
    "Beautiful animated components for React. Made with Motion and Tailwind.",

  openGraph: {
    title: "Sol Components",
    description:
      "Beautiful animated components for React. Made with Motion and Tailwind.",
    url: "https://sol-components.vercel.app",
    siteName: "Sol Components",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sol Components",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sol Components",
    description:
      "Beautiful animated components for React. Made with Motion and Tailwind.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
         <RootProvider>
          {children}
        </RootProvider>
        </body>
    </html>
  );
}
