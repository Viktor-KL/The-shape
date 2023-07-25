import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { selectOption } from 'store/slices/serviceSlice';
import serviceData from 'data/serviceData.json';
import styles from './Service.module.scss';
import IServiceOption from 'shared/interfaces/Service/IServiceOptions';

const ServiceOptions: FC = () => {
  const dispatch = useDispatch();
  const optionData: IServiceOption[] = serviceData.optionsHead;

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    dispatch(selectOption(selectedOption));
  };

  return (
    <div className={styles.wrapper}>
      <select name="massage" onChange={handleOptionChange}>
        {optionData.map((item, key) => (
          <option value={item.value} key={key}>
            {item.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServiceOptions;


// import { FC } from 'react'

// import { useDispatch } from 'react-redux'
// import { selectOption } from 'store/slices/serviceSlice'
// import serviceData from 'data/serviceData.json'
// import IServiceOption from 'shared/interfaces/Service/IServiceOptions'

// import styles from './Service.module.scss'

// const ServiceOptions: FC = () => {
//   const optionData:IServiceOption[] = serviceData.optionsHead
//   const optionBlocksData:IServiceOption[] = serviceData.optionBlocks

//   return (
//     <div className={styles.wrapper}>
//       <select name="massage">
//         {optionData.map((item, key) => (
//           <option value={item.value} key={key}>{item.option}</option>
//         ))}
//       </select>
      
//       {optionBlocksData.map((item, key) => (
//         <div className={styles.optionBlock}>
//           <h3>{item.option}</h3>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default ServiceOptions
