import React from "react";
import styles from 'styles/Button.module.css';

const Button = (props) => {
    let {name} = props
    return (

        <div className={styles.btnBlck}>
            <a><div>{name}</div></a>
        </div>
    )

}

export default Button
