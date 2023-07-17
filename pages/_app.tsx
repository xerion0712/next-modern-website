import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Montserrat } from 'next/font/google'
 
const roboto = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
 

export default function App({ Component, pageProps }: AppProps) {
  return <main className={roboto.className}><Component {...pageProps} /></main>
  
}
