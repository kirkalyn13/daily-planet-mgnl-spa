import { Metadata } from 'next';
import { Newsreader } from 'next/font/google';
import '../styles.css';

export const metadata: Metadata = {
  title: 'Next.js Starter Project',
  icons: {
    icon: '/favicon.png',
  },
};

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={newsreader.className}>
      <body>{children}</body>
    </html>
  );
}
