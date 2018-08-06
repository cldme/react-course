import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleHideModal}
            contentLabel="Selected Option"
            ariaHideApp={false}
        >
            <h3>Selected Option</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleHideModal}>Close</button>
        </Modal>
    );
};

export default OptionModal;