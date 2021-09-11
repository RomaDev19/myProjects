import styles from "styles/Cart.module.css";
import { useContext } from "react";
import { CartContext } from "context/CartContext";
import basket from "static/img/basket.svg";
import React from "react";
import Counter from 'components/Counter/Counter';
import useTranslation from "hooks/useTranslation";


const CartItem = ({ product }) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    const { t } = useTranslation();

    const { img, title, quantity, price } = product;


    return (
        <div className={styles.order__item}>
            <div className={styles.img__order}><img src={img} alt=""/></div>
            <div className={styles.namePrice}>
                <div className={styles.name__order}>{title}</div>
                <div className={styles.price__order}><span>{t('uah_pc')}</span></div>
            </div>

           <Counter increase={() => increase(product)} decrease={() => decrease(product)} quantity={quantity} />
            <div className={styles.deleteSumm}>
                <div className={styles.delete__order} onClick={() => removeProduct(product)} ><a><img src={basket} alt=""/></a></div>
                <div className={styles.summ__order}>{price * quantity} <span>{t('uah')}</span></div>
            </div>
        </div>
    )
}

export default CartItem;