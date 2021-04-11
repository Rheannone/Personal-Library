import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LendForm from './LendForm.js'


function LendFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Manage Books</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LendForm />
        </Modal>
      )}
    </>
  );
}

export default ItemListModal;