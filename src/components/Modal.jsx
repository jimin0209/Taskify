// Modal.js

import React, { useEffect } from 'react';
import styles from './Modal.module.scss';

const Modal = ({ message, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <h2>{message}</h2>
        </div>
        <div className={styles.modalActions}>
          <button onClick={onClose}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
