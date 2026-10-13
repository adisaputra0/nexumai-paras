import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientAnimator from "@/app/components/ClientAnimator";
import "@fortawesome/fontawesome-free/css/all.min.css";

const sen = localFont({
  src: [
    { path: "./fonts/Sen/Sen-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Sen/Sen-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Sen/Sen-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Sen/Sen-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Sen/Sen-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-sen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NexumAI - Your Smart AI Companion for UMKM",
  description: "Your Smart AI Companion for UMKM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sen.variable} bg-white text-gray-800`}>
        <ClientAnimator />
        {children}
      </body>
    </html>
  );
}
