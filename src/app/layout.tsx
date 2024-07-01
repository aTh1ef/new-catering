// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// import glightbox
import 'glightbox/dist/css/glightbox.css';
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

//import customised component
import Header from './components/Header';
import BackToTopBtn from './components/BackToTopBtn';
import Footer from './sections/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Tellis Caterers",
  description: "Serving Since 1998",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.ico" />
      </head>
      <body className={playfair.className}>
        <Header />
        {children}
        <Footer />
        <BackToTopBtn />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
