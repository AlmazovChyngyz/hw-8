import React from 'react';
import classes from './Modal.module.css';
import Button from '../button/Button';
// import Input from '../input/Input';


const Modal = (
    {
        children,
        handleShow,
    }) => {

    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                <Button text={'Закрыть'} action={handleShow}/>
                {children}
            </div>
        </>
    );
};

export default Modal;