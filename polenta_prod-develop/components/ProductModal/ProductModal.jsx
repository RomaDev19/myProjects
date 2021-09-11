import React, {useState} from 'react';
import styles from '../../styles/ProductModal.module.css'
import cross from '../../static/img/cross.svg';



const Modal = ({active = false, setActive, children}) => {





    return (
        <div className={active ? [styles.modal, styles.modalActive].join(' ') : styles.modal} onClick={()=> setActive(false)}>
            <div className={active ? [styles.modal__content , styles.active].join(' ') : styles.modal__content} onClick={e => e.stopPropagation()}>
                {children}
                <a className={styles.cross} onClick={() => setActive(false)}><img src={cross}/></a>
            </div>
        </div>
    )

}

export default Modal;