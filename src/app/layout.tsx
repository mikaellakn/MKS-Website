import { Oswald, Montserrat } from 'next/font/google';
import Navbar from '../components/Navbar';
import "./globals.css";

export const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

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
