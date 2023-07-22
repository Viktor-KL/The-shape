import { FC } from "react";

import benefitsData from 'data/benefitsData.json'

import styles from './Benefits.module.scss'
import BenefitsHead from "./BenefitsHead";
import BenefitsContent from "./BenefitsContent";
import BenefitsLeaves from "./BenefitsLeaves";

const Benefits: FC = () => {
    return (
        <section className={styles.section} id={benefitsData.sectionId}>
            <div className="container">
                <div className={styles.wrapper}>
                    <BenefitsLeaves />
                    <BenefitsHead />
                    <BenefitsContent />
                </div>
            </div>
        </section>
    )
}

export default Benefits