import './globals.css'
import { Inter } from 'next/font/google'
import "@/public/css/ljj.css";
import "@/public/css/normalize.css";
import "@/public/css/webflow.css";
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "남은 서비스 조회하기",
  description: "서비스 기간 조회하세요",
  icons:{
    icon:'images/logo.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script src="/js/webflow.js" strategy="lazyOnload"></Script>
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=660bf73b26a4d504faaf0159"></Script>
    </html>
  )
}
