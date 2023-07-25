import { FC, useState } from 'react'
import Image from 'next/image'

import serviceData from 'data/serviceData.json'

import styles from './Service.module.scss'
import massagePhoto from '/public/img/service/img-1.png'
import ServiceHead from './ServiceHead'

interface OptionContent {
  name: string
  description: string
  image: string
}

const Service: FC = () => {
  const [selectedOption, setSelectedOption] = useState('massage1')
  const [selectedContent, setSelectedContent] = useState<{
    [key: string]: OptionContent
  }>(getInitialContent())

  const handleSelectChnage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value
    setSelectedOption(selectedOption)
    updateSelectedContent(selectedOption)
  }

  const handleOptionBlockClick = (option: string) => {
    setSelectedOption(option)
    updateSelectedContent(option)
  }

  function getInitialContent(): { [key: string]: OptionContent} {
    return {
      massage1: {
        name: 'massage1',
        description:
          'Наша команда майстрів масажу знає, як допомогти вам з різними життєвими викликами. Ми допоможемо вам зняти напругу та стрес, які можуть виникати під час важливих проектів та дедлайнів. Наші послуги також сприятимуть вашому емоційному',
        image: '/public/img/service/img-1.png',
      },
      massage2: {
        name: 'massage2',
        description:
          'Наша команда майстрів масажу знає, як допомогти вам з різними життєвими викликами. Ми допоможемо вам зняти напругу та стрес, які можуть виникати під час важливих проектів та дедлайнів. Наші послуги також сприятимуть вашому емоційному',
        image: '/public/img/service/img-1.png',
      },
      massage3: {
        name: 'Массаж 3',
        description:
          'Наша команда майстрів масажу знає, як допомогти вам з різними життєвими викликами. Ми допоможемо вам зняти напругу та стрес, які можуть виникати під час важливих проектів та дедлайнів. Наші послуги також сприятимуть вашому емоційному',
        image: '/public/img/service/img-1.png',
      },
      massage4: {
        name: 'Розслаблення та відпочинок SPA',
        description:
          'Наша команда майстрів масажу знає, як допомогти вам з різними життєвими викликами. Ми допоможемо вам зняти напругу та стрес, які можуть виникати під час важливих проектів та дедлайнів. Наші послуги також сприятимуть вашому емоційному',
        image: '/public/img/service/img-1.png',
      },
      massage5: {
        name: 'Антицилюлітні програми',
        description:
          'Наша команда майстрів масажу знає, як допомогти вам з різними життєвими викликами. Ми допоможемо вам зняти напругу та стрес, які можуть виникати під час важливих проектів та дедлайнів. Наші послуги також сприятимуть вашому емоційному',
        image: '/public/img/service/img-1.png',
      },
    }
  }

  const updateSelectedContent = (option) => {
    setSelectedContent((prevContent) => ({
      ...prevContent,
      [option]: getInitialContent()[option],
    }))
  }

  return (
    <section className={styles.section} id={serviceData.section}>
      <div className='container'>
        <div className={styles.wrapper}>
          <ServiceHead />
          <div className={styles.service}>
            <div className={styles.options}>
              <div className={styles.selectWrapper}>
                <select
                  name='service'
                  defaultValue='Масажі'
                  className={styles.select}
                  onChange={handleSelectChnage}
                >
                  <option className={styles.option} value='massage1'>
                    Массаж1
                  </option>
                  <option className={styles.option} value='massage2'>
                    massage2
                  </option>
                  <option className={styles.option} value='massage3'>
                    massage3
                  </option>
                </select>
                <div className={styles.selectArrow}></div>
              </div>

              <p
                className={styles.optionBlock}
                onClick={() => handleOptionBlockClick('massage4')}
              >
                Розслаблення та відпочинок SPA
              </p>
              <p
                className={styles.optionBlock}
                onClick={() => handleOptionBlockClick('massage5')}
              >
                Антицилюлітні програми
              </p>
            </div>

            <div className={styles.contentWrapper}>
              <div className={styles.content}>
                <h3 className={styles.name}>
                  {selectedContent[selectedOption].name}
                </h3>
                <p className={styles.description}>
                  {selectedContent[selectedOption].description}
                </p>
              </div>
              <Image
                src={massagePhoto}
                width={245}
                height={280}
                alt='massage'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
