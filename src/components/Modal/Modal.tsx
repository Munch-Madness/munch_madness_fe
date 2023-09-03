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
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#080808',
      color: 'white',
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
    <button
      onClick={() => {
        handleOpenModal();
      }}
    >
      <BsInfoSquare />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Restaurant Modal"
      >
        <div className='flex flex-col justify-center text-center'>
          <button
            className="absolute top-1 right-1 border border-solid px-1 border-green rounded text-green hover:bg-green hover:text-background hover:border-background"
            onClick={handleCloseModal}
          >
            exit
          </button>
          <h2 className='text-2xl pb-2'>{data.attributes.name}</h2>
          <img src={data.attributes.photo} alt={data.attributes.name} />
          <div className="flex flex-row justify-between">
            <p className='flex items-center'>Price: {renderPrice(data.attributes.price)}</p>
            <p>Rating: {renderRating(data.attributes.rating)}</p>
          </div>
          <p className='m-2'>{renderWebsite(data.attributes.website)}</p>
          <p>{renderAddress(data.attributes.address, data.attributes.name)}</p>
        </div>
      </Modal>
    </button>
  );
}
