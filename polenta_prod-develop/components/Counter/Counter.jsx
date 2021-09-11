import React from 'react';
import styles from '../../styles/Counter.module.css';


const CounterAmount = ({ increase, decrease, quantity }) => {
    return (
        <>
            <div className={styles.amount__order}>
                <div>
                    <a onClick={decrease}>-</a><span>{quantity}</span><a onClick={increase} >+</a></div>
            </div>
        </>
    )
}

export default CounterAmount;