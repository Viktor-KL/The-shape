import type { AppProps } from 'next/app'
import './../../src/styles/globals.scss'
import Layout from 'components/layout/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
