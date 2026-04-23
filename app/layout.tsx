import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scholar — Your all-nighter research assistant.",
  description:
    "Pick a topic. Scholar reads fifty sources, synthesizes the arguments, and hands you an outline with citations.",
  openGraph: {
    title: "Scholar — Your all-nighter research assistant.",
    description:
      "Pick a topic. Scholar reads fifty sources, synthesizes the arguments, and hands you an outline with citations.",
    images: [
      {
        url: "https://waitlist-api-sigma.vercel.app/api/og?title=Scholar&accent=blue&category=Education",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      "https://waitlist-api-sigma.vercel.app/api/og?title=Scholar&accent=blue&category=Education",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-neutral-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
