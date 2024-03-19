import { Navbar } from "@/app/components/Navbar/Navbar";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="flex p-8">
        <Navbar/>
        <div className="px-8 mt-16">
          {children}
        </div>
        
      </body>
    </html>
  );
}
