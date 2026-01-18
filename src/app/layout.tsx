import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maheer Nasir | Marketing & Media Specialist",
  description: "Portfolio of Maheer Nasir - Marketing & Media Strategist specializing in Social Media Marketing and Outdoor Media.",
  keywords: ["Marketing", "Social Media", "Outdoor Advertising", "Branding", "Maheer Nasir"],
  authors: [{ name: "Maheer Nasir" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/ADWORKSLOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
