import type { AppProps } from 'next/app'
import Head from 'next/head'

import { GlobalStyles } from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WavePoint</title>
        <link rel="shortcut icon" href="/images/logo_wavecode.ico" />
        <link rel="apple-touch-icon" href="/images/logo_wavecode.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
