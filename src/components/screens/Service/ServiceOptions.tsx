import { FC } from 'react'

import serviceData from 'data/serviceData.json'

import styles from './Service.module.scss'
import IServiceOption from 'shared/interfaces/Service/IServiceOptions'

const ServiceOptions: FC = () => {
  const optionData:IServiceOption[] = serviceData.optionsHead
  const optionBlocksData:IServiceOption[] = serviceData.optionBlocks

  return (
    <div className={styles.wrapper}>
      <select name="massage">
        {optionData.map((item, key) => (
          <option value={item.value} key={key}>{item.option}</option>
        ))}
      </select>
      
      {optionBlocksData.map((item, key) => (
        <div className={styles.optionBlock}>
          <h3>{item.option}</h3>
        </div>
      ))}
    </div>
  )
}

export default ServiceOptions
