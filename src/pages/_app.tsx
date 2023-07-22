import type { AppProps } from 'next/app'
import './../../src/styles/globals.scss'
import Layout from 'components/layout/Layout'

import { Provider } from 'react-redux'
import store from 'store/store'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Provider>
)

export default MyApp
