import { FC } from 'react'

import Button from 'components/ui/Button/Button'

import aboutData from 'data/aboutData.json'
import { IAboutContent } from 'shared/interfaces/About/IAboutContent'

import styles from './About.module.scss'

const AboutContent: FC = () => {
    const { title, first_description, second_description, button}: IAboutContent = aboutData.content

  return (
    <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{first_description}</p>
        <p className={styles.description}>{second_description}</p>
        <Button type='anchor' href={button.anchor} text={button.text} className='dark' customClass={styles.button}/>
    </div>
  )
}

export default AboutContent
