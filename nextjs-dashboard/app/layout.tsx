// adding the css file to this is whole lot easier than adding it to each page.

import '@/app/ui/global.css';
import {inter,lusitana} from '@/app/ui/fonts';
/*
This is the ultimate root layout , kind of like the app.tsx in vite react? 
according to my understanding
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
