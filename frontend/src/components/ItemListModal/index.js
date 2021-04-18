import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ItemList from './ItemList'


function ItemListModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='navbutton'>My Library</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ItemList />
        </Modal>
      )}
    </>
  );
}

export default ItemListModal;