import { FC } from "react";

import serviceData from 'data/serviceData.json'

import styles from './Offer.module.scss'

const Service: FC = () => {
    return (
        <section className={styles.section} id={serviceData.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    
                </div>
            </div>
        </section>
    )
}

export default Service