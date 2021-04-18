import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Manage from './Manage'


function ManageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='navbutton'>Manage</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Manage />
        </Modal>
      )}
    </>
  );
}

export default ManageModal;