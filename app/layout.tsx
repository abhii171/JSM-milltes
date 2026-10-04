import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JSM Ragi & Millet Tiffins',
  description: 'Authentic millet and ragi tiffins, healthy South Indian breakfasts, and Hyderabad locations.',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
