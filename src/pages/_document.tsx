import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <title>Grupo INAP</title>
        <link
          rel='icon'
          href='/assets/logos/logo_without_text_light.png'
        ></link>
      </Head>
      <body className='antialiased'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
