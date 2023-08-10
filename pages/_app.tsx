import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Mulish } from 'next/font/google'

const mulish = Mulish({
  weight: '500',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={mulish.className}>
      <Head>
        <title>Frontend Developer Portfolio | FrontendFirst</title>
        <meta
          name="description"
          content="Explore my portfolio as a mid-level Frontend Developer showcasing visually stunning and interactive user interfaces created using React.js and Next.js. Get in touch for your web design needs."
        />
        <link rel="icon" href="/img/fevicon.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
