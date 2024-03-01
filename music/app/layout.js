import { Inter } from "next/font/google";
import "../styles/style.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Music Player",
  description: "A simple, minimal and lightweight music player cerated by using Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
