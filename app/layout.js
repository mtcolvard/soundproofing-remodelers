import './globals.css'
import { Inter, Roboto_Mono, Ysabeau } from 'next/font/google';
import Nav from './components/nav.js'

export const metadata = {
  title: 'Soundproofing Remodelers',
  description: 'Soundproofing Remodelers, Acoustical consultants to the Bay Area since 1998',
}


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// });

const ysabeau = Ysabeau({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ysabeau',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${ysabeau.variable}`}>
      {/* <html lang="en" className={`${inter.variable} ${roboto_mono.variable} ${ysabeau.variable}`}> */}
      <body>
        <header>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  );
}