import Footer from "@/Components/Footer/page"
import Header from "@/Components/Header/page"
import Link from "next/link"
import "../globalStyle/style.min.css"
export const metadata = {
  title: '',
  description: 'Divisão Urutu Airsoft',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
