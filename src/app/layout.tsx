import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://webdevakash.com/'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Akash Kumar | Top Freelance Web Developer & UI/UX Designer in London",
    description: "Elevate your online presence with Akash Kumar, London's seasoned freelance Web Developer and UI/UX Designer. Discover bespoke web solutions that blend innovation with aesthetic design, using technologies like HTML, CSS, React.js, and Next.js.", // OG Description
    images: [
      {
        url: 'https://webdevakash.com/images/hero-image.png',
        width: 1200,
        height: 630,
        alt: "Akash Kumar's Portfolio - Web Development and UI/UX Design",
      },
    ],
    type: 'website',
    url: 'https://webdevakash.com/',
    site_name: "Akash Kumar's Web Development Portfolio",
  },
  title: "Akash Kumar | Expert Web Developer & UI/UX Designer in London",
  description: "Akash Kumar, London's web developer and UI/UX designer. Expert in web web optimisation and bespoken website development.",
  twitter: {
    cardType: 'summary_large_image',
    site: '@YourTwitterHandle',
    title: "Akash Kumar | London's Premier Web Developer & UI/UX Designer",
    description: "Unlock your brand's potential with custom web solutions by Akash Kumar. Specializing in responsive design and user-engaging interfaces.",
    image: 'https://webdevakash.com/images/hero-image.png',
    imageAlt: "Explore Akash Kumar's Portfolio - Innovation meets aesthetics in web development and design.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="XYZ" />
    </html>
  );
}
