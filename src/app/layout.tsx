import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Akash Kumar: Expert Web Developer & UI/UX Designer | London",
    template: "%s - Web Dev Akash | Akash Kumar "
  },
  description: "Discover cutting-edge web development and UI/UX design by Akash Kumar, London’s leading expert. Dive into a portfolio that merges innovation with aesthetics, leveraging HTML, CSS, React Js, and Next Js. Elevate your brand with Akash's bespoke digital solutions.",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4KVF2Q6Q6V"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4KVF2Q6Q6V');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
