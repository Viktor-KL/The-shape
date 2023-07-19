import { FC, ReactNode } from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'

type Props = { children: ReactNode }

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
