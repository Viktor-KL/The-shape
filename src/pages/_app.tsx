import type { AppProps } from 'next/app'
import './../../src/styles/globals.scss'
import Layout from 'components/layout/Layout'
import { ConfigProvider } from 'antd'

import { Provider } from 'react-redux'
import store from 'store/store'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ConfigProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  </Provider>
)

export default MyApp
