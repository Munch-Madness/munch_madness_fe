import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import { BsInfoSquare } from 'react-icons/bs';
import {
  renderPrice,
  renderRating,
  renderWebsite,
  renderAddress,
} from '../util/helperFunctions';
// function Modal({ isOpen, onClose, restaurant }) {
//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <button className="modal-close" onClick={onClose}>Close</button>
//         <div className="modal-content">
//           {restaurant}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;

interface Props {
  data: any;
}

export function RestaurantModal({ data }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = (e: any) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <button onClick={() => {handleOpenModal()}}>
      <BsInfoSquare />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Restaurant Modal"
      >
        <button className='absolute top-1 right-1 border border-solid' onClick={handleCloseModal}>X</button>
        <h2>{data.attributes.name}</h2>
        <img src={data.attributes.photo} alt={data.attributes.name} />
        <p>Price: {renderPrice(data.attributes.price)}</p>
        <p>Rating: {renderRating(data.attributes.rating)}</p>
        <p>Website: {renderWebsite(data.attributes.website)}</p>
        <p>Address: {renderAddress(data.attributes.address)}</p>
      </Modal>
    </button>
  );
}
