import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/context/LocaleContext";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "L-Ectric | שירותי חשמל מקצועיים | Professional Electrical Services",
  description:
    "L-Ectric – חשמלאי מוסמך. שירותי חשמל מקצועיים לבית ולעסק. אמינות, דיוק, בטיחות. אזור המרכז. Professional electrical services in Central Israel.",
  keywords: "חשמלאי, שירותי חשמל, בית חכם, לוח חשמל, חשמלאי מוסמך, electrician",
  openGraph: {
    title: "L-Ectric | שירותי חשמל מקצועיים",
    description: "שירותי חשמל מקצועיים ללא פשרות – אמינות, דיוק, בטיחות.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${heebo.variable} font-heebo antialiased bg-dark-900 text-white min-h-screen`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
