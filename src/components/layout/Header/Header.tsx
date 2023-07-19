import { FC } from 'react'
import Link from 'next/link'

import headerData from 'data/headerData.json'
import IHeader from 'shared/interfaces/Header/IHeader'
import styles from './Header.module.scss'
import Button from 'components/ui/Button/Button'

const Header: FC = () => {
  const links: IHeader[] = headerData.links

  return (
    <header className={styles.header} id='header'>
      <div className='container'>
        <div className={styles.wrapper}>
          <Link href='/' className={styles.logo}>
            The shape
          </Link>

          <div className={styles.linksWrapper}>
            {links.map((item, key) => (
              <a href={item.href} key={key}>
                {item.text}
              </a>
            ))}
          </div>

          <Button
            type='anchor'
            text={headerData.button.text}
            className={headerData.button.className}
            customClass={styles.button}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
