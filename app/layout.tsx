import './globals.css';
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "SmartTable Connect | نظام إدارة المطاعم الذكي",
  description: "نظام متكامل لحجز الطاولات، الطلب عبر QR Code، والدفع الإلكتروني للمطاعم.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        {children}
      </body>
    </html>
  );
}