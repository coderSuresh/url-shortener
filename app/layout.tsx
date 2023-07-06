import Header from '@/components/Header'
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

      </body>
    </html>
  )
}

export default RootLayout