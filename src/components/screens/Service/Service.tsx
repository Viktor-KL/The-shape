import { FC } from "react";

import serviceData from 'data/serviceData.json'

import styles from './Service.module.scss'
import ServiceHead from "./ServiceHead";
import ServiceOptions from "./ServiceOptions";
import ServiceDetails from "./ServiceDetails";

const Service: FC = () => {
    return (
        <section className={styles.section} id={serviceData.section}>
            <div className="container">
                <div className={styles.wrapper}>
                    <ServiceHead />
                    <div className={styles.service}>
                        <ServiceOptions />
                        <ServiceDetails />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service