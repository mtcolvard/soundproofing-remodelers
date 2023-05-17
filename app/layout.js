import './globals.css'
import { inter } from './fonts'

export const metadata = {
  title: 'Soundproofing Remodelers',
  description: 'Soundproofing Remodelers, Acoustical consultants to the Bay Area since 1998',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
