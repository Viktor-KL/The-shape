// // import { FC } from 'react'

// // import serviceData from 'data/serviceData.json'
// // import ServiceContent from './ServiceContent'

// // import styles from './Service.module.scss'
// // import ServiceImage from './ServiceImage'

// // const ServiceDetails: FC = () => {
// //   return (
// //     <div className={styles.details}>
// //       <ServiceContent />
// //       <ServiceImage />
// //     </div>
// //   )
// // }

// // export default ServiceDetails


// import { FC } from 'react';
// import { useSelector } from 'react-redux';
// import styles from './Service.module.scss';
// import { RootState } from 'store/store';
// import IServiceOptionContent from 'shared/interfaces/Service/IServiceOptionContent';

// const ServiceDetails: FC = () => {
//   const selectedContent: IServiceOptionContent | null = useSelector(
//     (state: RootState) => state.service.selectedContent
//   );

//   if (!selectedContent) {
//     return null;
//   }

//   return (
//     <div className={styles.details}>
//       <h3>{selectedContent.title}</h3>
//       <p>{selectedContent.description}</p>
//       <img
//         src={selectedContent.image.url}
//         alt={selectedContent.image.alt}
//         width={selectedContent.image.width}
//         height={selectedContent.image.height}
//       />
//     </div>
//   );
// };

// export default ServiceDetails;