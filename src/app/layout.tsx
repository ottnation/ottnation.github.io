import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { ThemeProvider } from "next-themes";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
});

const siteUrl = "https://ottnation.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OTT Nation",
    template: "%s | OTT Nation",
  },
  description: "Exploring Our Brave New Connected World",
  openGraph: {
    siteName: "OTT Nation",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    site: "@ottnation",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
