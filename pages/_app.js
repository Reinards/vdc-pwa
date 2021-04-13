import Head from 'next/head'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>VDC - Atgūsti Mieru!</title>

        <link rel="manifest" href="/manifest.json" />

        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="mask-icon" href="/icon/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:image:height" content="1257" />
        <meta property="og:image:width" content="2400" />
        <meta property="og:description" content="Mēs tev palīdzēsim atgūt mieru bez medikamentiem." />
        <meta property="og:title" content="VDC - Atgūsti Mieru!" />
        <meta property="og:image" content="https://vdce.lv/social/og-image.jpg" />
        <meta property="og:url" content="https://www.vdce.lv" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
