import Head from 'next/head'
import '../styles/globals.scss'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>KapitCha</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
