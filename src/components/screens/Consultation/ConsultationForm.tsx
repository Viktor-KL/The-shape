import { FC } from 'react'
import { Select } from 'antd'

import consultationData from 'data/consultationData.json'
import IConsultationInputs from 'shared/interfaces/Consultation/IConsultationInputs'

import styles from './Consultation.module.scss'
import IConsultationSelect from 'shared/interfaces/Consultation/IConsultationSelect'
import IConsultationSubmitInput from 'shared/interfaces/Consultation/IConsultationSubmitInput'

const ConsultationForm: FC = () => {
  const inputsData: IConsultationInputs[] = consultationData.inputs
  const optionsData: IConsultationSelect[] = consultationData.select
  const { type, value }: IConsultationSubmitInput = consultationData.submitBtn

  const handle = () => {
    console.log(123)
  }

  return (
    <form onSubmit={handle}>
      <div className={styles.form}>
        {inputsData.map((item, key) => (
          <input type={item.type} placeholder={item.placeholder} className={styles.input}/>
        ))}
        <Select
          defaultValue='Вибір послуги'
          className={styles.select}
          options={optionsData.map((item) => ({
            value: item.value,
            label: item.label,
          }))}
          popupClassName={styles.dropdownStyle}
          
        />
        <input type={type} value={value} className={styles.submitBtn}/>
      </div>
    </form>
  )
}

export default ConsultationForm
