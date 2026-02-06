// adding the css file to this is whole lot easier than adding it to each page.

import '@/app/ui/global.css';

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
      <body>{children}</body>
    </html>
  );
}
