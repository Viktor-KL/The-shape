import { FC } from 'react'

import footerData from 'data/footerData.json'

import styles from './Footer.module.scss'
import FooterSocials from './FooterSocials'
import IFooterLinks from 'shared/interfaces/Footer/IFooterLinks'

const FooterItems: FC = () => {
const data: IFooterLinks[] = footerData.items

  return (
    <div className={styles.items}>
      {data.map((item, key) => (
        <a key={key} href={item.href} className={styles.link}>{item.link}</a>
      ))}
      <FooterSocials />
    </div>
  )
}

export default FooterItems