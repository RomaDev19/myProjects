import React, {useContext} from 'react';
import styles from 'styles/Cart.module.css'
import Button from '../Button/Button'
import { CartContext } from "context/CartContext";
import cross from 'static/img/cross.svg';
import CartItem from "components/CartItem/CartItem";
import Link from 'next/link';
import ArrowLeft from 'static/img/left.svg';
import useTranslation from "hooks/useTranslation";


const Cart = ({active, setActive}) => {

    const { cartItems } = useContext(CartContext)

    const total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);


    const { t, locale } = useTranslation();

    return (
        <div className={active ? [styles.cart , styles.active].join(" ") : styles.cart } onClick={setActive}>
            <div className={active ? [styles.cart__content,  styles.active].join(" ") : styles.cart__content} onClick={e => e.stopPropagation()}>
                <div className={styles.right__blck}>
                    <div className={styles.title__page}>{t('myCart')}</div>
                    <div className={styles.order__container}>
                        <div className={styles.title__container}>
                            <div>{t('productTitle')}</div>
                            <div>{t('cost')}</div>
                            <div>{t('amount')}</div>
                            <div>{t('sum')}</div>
                        </div>
                        <div className={styles.order}>
                            {
                                cartItems.length ? cartItems.map(item => <CartItem product={item} />) : null
                            }
                        </div>
                    </div>
                    <div className={styles.func__order}>
                        <div className={styles.title__switch}>
                            <Link href={'/[lang]/shop'} as={`/${locale}/shop`}><a><div className={styles.back__buy} onClick={setActive} ><a><img src={ArrowLeft} alt=""/>{t('backToProducts')}</a></div></a></Link>
                        </div>
                        <div className={styles.tot__summ}>{t('totalSum')}: {total} <div> <span>{t('uah')}</span></div></div>
                        <Button name={t('confirmOrder')}/>

                    </div>
                </div>
                <a className={styles.cross} onClick={() => setActive(false)}><img src={cross}/></a>
            </div>
        </div>
    )

}

export default Cart;