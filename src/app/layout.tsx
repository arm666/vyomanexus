import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VYOMA NEXUS PVT. LTD",
  description: "WHERE INNOVATION AND EXPERTISE CONVERGE SEAMLESSLY",
  metadataBase: new URL("https://vyomanexus.com.np"),
  openGraph: {
    title: "VYOMA NEXUS PVT. LTD",
    description: "WHERE INNOVATION AND EXPERTISE CONVERGE SEAMLESSLY",
    url: "https://vyomanexus.com.np",
    siteName: "VYOMA NEXUS PVT. LTD",
    images: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
