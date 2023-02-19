import React from 'react';
import styles from './Modal.module.css';

const Modal = ({modal,setModal, children}) => {
    return (
        <div className={modal ? styles.modal + ' ' + styles.active : styles.modal} onClick={()=> setModal(false)}>
            <div className={modal ? styles.modal__content + ' ' + styles.active : styles.modal__content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;