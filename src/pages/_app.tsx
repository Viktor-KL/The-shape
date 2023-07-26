import type { AppProps } from 'next/app'
import './../../src/styles/globals.scss'
import Layout from 'components/layout/Layout'
import { ConfigProvider } from 'antd'
import { theme } from 'styles/theme'

import { Provider } from 'react-redux'
import store from 'store/store'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  </Provider>
)

export default MyApp
