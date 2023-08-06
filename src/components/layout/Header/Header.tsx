import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import headerData from 'data/headerData.json'
import IHeader from 'shared/interfaces/Header/IHeader'
import styles from './Header.module.scss'
import Button from 'components/ui/Button/Button'

import arrowIcon from '/public/img/header/arrow.svg'
import burgerIcon from '/public/img/header/burger.svg'

const Header: FC = () => {
  const [isBlockVisible, setIsBlockVisible] = useState<boolean>(false)

  const links: IHeader[] = headerData.links

  const handleButtonClick = () => {
    setIsBlockVisible(!isBlockVisible)
  }

  return (
    <header className={styles.header} id='header'>
      <div className='container'>
        <div className={styles.wrapper}>
          <Link href='#offer' className={styles.logo}>
            The shape
          </Link>

          <div className={styles.linksWrapper}>
            {links.map((item, key) => (
              <a href={item.href} key={key}>
                {item.text}
              </a>
            ))}
          </div>
          <div className={styles.btnWrapper}>
            <Button
              type='anchor'
              text={headerData.button.text}
              className={headerData.button.className}
              customClass={styles.button}
              href={headerData.button.href}
            />
            <button className={styles.burgerBtn} onClick={handleButtonClick}>
              <Image src={burgerIcon} height={32} width={32} alt='burger' />
            </button>
            {isBlockVisible && (
              <div className={styles.mobileMenu}>
                <div className={styles.line}></div>
                {links.map((item, key) => (
                  <a
                    href={item.href}
                    className={styles.item}
                    key={key}
                    onClick={handleButtonClick}
                  >
                    <div className={styles.itemLinkWrapper}>
                      <a href={item.href}>{item.text}</a>
                      <Image
                        src={arrowIcon}
                        alt='arrow'
                        height={16}
                        width={8}
                      />
                    </div>
                    <div className={styles.line}></div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
