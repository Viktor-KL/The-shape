import { FC } from "react";

import styles from './Faq.module.scss'
import faqData from 'data/faqData.json'
import FaqContent from "./FaqContent";
import FaqImage from "./FaqImage";

const Faq: FC = () => {
    return (
        <section className={styles.section} id={faqData.sectionId}>
            <div className="container">
                <div className={styles.wrapper}>
                    <FaqContent />
                    <FaqImage />
                </div>
            </div>
        </section>
    )
}

export default Faq