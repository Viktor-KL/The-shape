import { FC } from "react";

import aboutData from 'data/aboutData.json'
import AboutContent from './AboutContent'
import AboutImage from './AboutImage'

import styles from './About.module.scss'

const About: FC = () => {
    const { sectionId } = aboutData

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <div className={styles.wrapper}>
                    <AboutContent />
                    <AboutImage />
                </div>
            </div>
        </section>
    )
}

export default About