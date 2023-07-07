import Header from '@/components/Header'
import Footer from '@/components/Footer/Footer'
import './globals.css'

export const metadata = {
  title: 'URL Shortener',
  description: 'A functional URL shortener using API',
}

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout