import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { selectOption } from 'store/slices/serviceSlice';
import serviceData from 'data/serviceData.json';
import styles from './Service.module.scss';
import IServiceOption from 'shared/interfaces/Service/IServiceOptions';
import { Select } from 'antd';

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
          <option value={item.value} key={key} className={styles.a}>
            {item.option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ServiceOptions;



