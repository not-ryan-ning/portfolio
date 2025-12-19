import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import "./globals.css";

const geist = GeistSans;

const ibmPlexMono = localFont({
  src: "../../public/fonts/IBMPlexMono-Medium.ttf",
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorem Ipsum — Portfolio",
  description:
    "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.",
  metadataBase: new URL("https://example.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${ibmPlexMono.variable}`}>
      <body className="tracking-tight">{children}</body>
    </html>
  );
}
