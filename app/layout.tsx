import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Minna Stove Repair | Gas Stove Parts & Home Repair Services",
    template: "%s | Minna Stove Repair",
  },
  description:
    "Minna Stove Repair — gas stove spare parts, home repair services, and expert repairs for household, hotel, and commercial kitchen stoves.",
  icons: {
    icon: [{ url: "/images/icon_mark.png", type: "image/png" }],
    apple: "/images/icon_mark.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
