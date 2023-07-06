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
      <body>{children}</body>
    </html>
  )
}

export default RootLayout