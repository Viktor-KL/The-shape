import { FC } from 'react'

import styles from './Faq.module.scss'
import faqData from 'data/faqData.json'
import { IFaq } from 'shared/interfaces/Faq/IFaq'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FaqContent: FC = () => {
  const content: IFaq[] = faqData.accordion

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{faqData.title}</h2>
      {content.map((item, key) => (
        <Accordion key={key} className={styles.a}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            className={styles.panel_header}
          >
            <Typography className={styles.question}>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={styles.description}>
              {item.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default FaqContent
