import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'
import { noto } from '@/utils/fonts'
import type { AppProps } from 'next/app'

import 'primeicons/primeicons.css'
import 'primereact/resources/themes/saga-orange/theme.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={noto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
