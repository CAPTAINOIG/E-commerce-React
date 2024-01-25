// CustomModal.jsx

import React from 'react';
import Modal from 'react-modal';

// Set the root element that should be hidden from screen readers
Modal.setAppElement('#root'); // Replace '#root' with the id or class of your root element

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '2rem',
    borderRadius: '0.5rem',
  },
};

const CustomModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* Modal content */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p>This is the modal content. You can add any React component here.</p>
        <input type="text" />
        <input type="text" />
        <input type="text" />

        <button
          onClick={closeModal}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close Modal
        </button>
      </div>
    </Modal>
  );
};

export default CustomModal;
