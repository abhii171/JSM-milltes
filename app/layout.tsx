import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'JSM Ragi & Millet Tiffins | Authentic Healthy South Indian Breakfast in Hyderabad',
  description: 'Discover fresh ragi and millet tiffins, traditional South Indian breakfasts, and JSM outlets in Hyderabad.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#FAF6EC] text-stone-800 selection:bg-amber-200 selection:text-emerald-950`}>
        {children}
      </body>
    </html>
  );
}
