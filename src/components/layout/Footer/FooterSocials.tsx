import { FC } from 'react'
import Image from 'next/image'

import footerData from 'data/footerData.json'
import IFooterSocials from 'shared/interfaces/Footer/IFooterSocials'

import styles from './Footer.module.scss'

const FooterSocials: FC = () => {
  const data: IFooterSocials[] = footerData.socials

  return (
    <div className={styles.socials}>
      {data.map((item, key) => (
        <a key={key} href={item.href} target='_blank' className={styles.link}>
          <Image src={item.url} alt={item.alt} width={item.width} height={item.height}/>
        </a>
      ))}
    </div>
  )
}

export default FooterSocials