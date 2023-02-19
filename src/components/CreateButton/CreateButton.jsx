import React from 'react';
import styles from './CreateButton.module.css';

const CreateButton = ({modal, setModal}) => {


    function openModal() {
        setModal(true)
    }


    return (
        <div >
            <button className={styles.button} onClick={openModal}>
                <span>+</span>
            </button>
        </div>
    );
};

export default CreateButton;