import React, { Component } from 'react'
import styles from './ButtonBuy.module.css'
import cartPlus from '../../static/img/cartPlus.svg';

const Button = (props) => {


    return (

        <div className={styles.btnBuy}>
            <a >
                <div className={styles.leftSec}>30 грн</div>
                <div className={styles.rightSec}><img src={cartPlus} alt=""/></div>

            </a>
        </div>
    )

}

export default Button
