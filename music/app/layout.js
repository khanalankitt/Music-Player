import { Inter } from "next/font/google";
import "../styles/style.css"
const inter = Inter({ subsets: ["latin"] });
import Image from "next/image";
export const metadata = {
  title: "Music Player",
  description: "A simple, minimal and lightweight music player cerated by using Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Image className="imageBg" src='/music.jpg' height={1080} width={1920} quality={0} alt="bg"/>
        {children}
        </body>
    </html>
  );
}
