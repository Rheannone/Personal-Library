import React, {useState} from 'react';
import { Modal } from '../../context/Modal';
import SearchForm from './SearchForm'

function SearchFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
    <button onClick={() => setShowModal(true)}>Add Friends</button>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <SearchForm />
        </Modal>
    )}
    </>
    );
};

export default SearchFormModal;