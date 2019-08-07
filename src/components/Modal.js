import React from 'react';
import './Modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal modal--is-open" : "modal modal--is-closed";

  return (
    <section className={showHideClassName}>
      {children}
      <button className="button" onClick={handleClose}>close</button>
    </section>
  )
};

export default Modal;
