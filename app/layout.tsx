import type { Metadata } from 'next';
import { Orbitron, Rajdhani, Aldrich } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-orbitron',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
});

const aldrich = Aldrich({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aldrich',
});

export const metadata: Metadata = {
  title: 'Ben Ayden',
  description: 'Potfolio site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${orbitron.className} ${rajdhani.className} ${aldrich.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
