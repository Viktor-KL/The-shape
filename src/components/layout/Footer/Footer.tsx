import { FC } from 'react'
import styles from './Footer.module.scss'
import FooterLogo from './FooterLogo'
import FooterItems from './FooterItems'
import FooterMap from './FooterMap'
import FooterInfo from './FooterInfo'

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.wrapper}>
          <FooterLogo />
          <FooterItems />
          <FooterMap />
        </div>
        <div className={styles.line}></div>
        <FooterInfo />
      </div>
    </footer>
  )
}

export default Footer