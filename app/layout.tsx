import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import TopBar from "@/components/top-bar"
import MainNavigation from "@/components/main-navigation"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: "RehberPOS - Restoranlar İçin Modern Adisyo ve Sipariş Yönetim Sistemi",
  description:
    "RehberPOS, restoranlar, kafeler ve yiyecek işletmeleri için eksiksiz bir sipariş ve stok yönetim çözümü sunar. Siparişleri, envanteri ve müşterileri kolayca yönetin.",
  keywords:
    "POS, adisyo, restoran yönetimi, kafe yazılımı, yiyecek işletmesi, RehberPOS, sipariş sistemi, restoran programı",
  openGraph: {
    title: "RehberPOS - Restoranlar İçin Modern Adisyo Sistemi",
    description: "Gelişmiş POS özellikleriyle eksiksiz restoran yönetim çözümü",
    type: "website",
    url: "https://rehberpos.com",
    locale: "tr_TR",
    images: [
      {
        url: "https://rehberpos.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RehberPOS Restoran Yönetim Sistemi",
      },
    ],
  },
  alternates: {
    canonical: "https://rehberpos.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "RehberPOS" }],
  applicationName: "RehberPOS",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "RehberPOS",
  publisher: "RehberPOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rehberpos.com"),
  other: {
    "google-site-verification": "verification_token",
  },
  twitter: {
    card: "summary_large_image",
    title: "RehberPOS - Restoranlar İçin Modern Adisyo Sistemi",
    description: "Gelişmiş POS özellikleriyle eksiksiz restoran yönetim çözümü",
    images: ["https://rehberpos.com/images/twitter-card.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <TopBar />
            <MainNavigation />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'