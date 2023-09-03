import React from 'react';
import { useState } from 'react';
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

function RestaurantModal({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>{data.attributes.name}</h2>
      <img src={data.attributes.photo} alt={data.attributes.name} />
      <p>Price: {data.attributes.price}</p>
      <p>Rating: {data.attributes.rating}</p>
      <button onClick={handleOpenModal}>View details</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} restaurantData={data.attributes} />
    </div>
  );
}