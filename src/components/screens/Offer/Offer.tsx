import { FC } from "react";
import Image from "next/image";

import offerData from 'data/offerData.json'
import OfferContent from "./OfferContent";
import OfferImage from "./OfferImage";

import styles from './Offer.module.scss'

const Offer: FC = () => {
    const { sectionId } = offerData

    return (
        <section className={styles.section} id={sectionId}>
            <div className="container">
                <div className={styles.wrapper}>
                    <OfferContent />
                    <OfferImage />
                </div>
            </div>
        </section>
    )
}

export default Offer