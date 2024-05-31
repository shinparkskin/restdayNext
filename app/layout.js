import "./globals.css";
import { Inter } from "next/font/google";
import "@/public/css/ljj.css";
import "@/public/css/normalize.css";
import "@/public/css/webflow.css";
import Script from "next/script";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: "images/icon.png",
  },
  title: "체험단시대 남은기간 조회하기",
  openGraph: {
    title: "체험단시대 남은기간 조회하기",
    url: "restday-next.vercel.app",
    siteName: "restday-next.vercel.app",
    images: [
      {
        url: "https://exgen.s3.ap-northeast-2.amazonaws.com/icon.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "ko_Kr",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>

      <Script src="/js/webflow.js" strategy="lazyOnload"></Script>
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=660bf73b26a4d504faaf0159"></Script>
    </html>
  );
}
