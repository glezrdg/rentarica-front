import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-cyan/theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
