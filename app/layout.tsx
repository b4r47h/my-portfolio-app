import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
const inter = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Bharath Krishna',
  description: 'My personal portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'{inter.className} min-h-screen'}>{children}</body>
    </html>
  );
}
