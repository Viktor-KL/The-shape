import { FC } from 'react'

import footerData from 'data/footerData.json'

import styles from './Footer.module.scss'
import IFooterLinks from 'shared/interfaces/Footer/IFooterLinks'

const FooterInfo: FC = () => {
  const data: IFooterLinks[] = footerData.infoLinks

  return (
    <div className={styles.info}>
      {data.map((item, key) => (
        <a key={key} className={styles.link} href={item.href}>{item.link}</a>
      ))}
    </div>
  ) 
}

export default FooterInfo