import { Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import "./globals.css";
import { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: "MKS",
  description: "Hair Salon",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className}`}
      >
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
