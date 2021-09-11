import React, { useContext, useState, useEffect } from 'react';
import styles from 'styles/ProductModalContent.module.css';
import Counter from '../Counter/Counter';
import useTranslation from "hooks/useTranslation";
import { CartContext } from "context/CartContext";
import {toast} from "react-toastify";


const ModalContent = ({product}) => {

    const [quantity, setQuantity] = useState(0)

    const { t } = useTranslation();

    const {
        title, imgModal, weight1, weight2, price, shelfLife1,
        shelfLife2, ingredients, ingredients1, ingredients2,
        productText, tastes1, tastes2, energyVal1, energyVal2, energyVal3, id,
    } = product;



    const { addProduct, increase, cartItems, decrease } = useContext(CartContext)

    const isInCart = !!cartItems.find(item => item.id === id)

    const idx = cartItems.find(item => item.id)



    const addToCart = (product) => {


        toast(t('addedToCart'), {
            position: "top-right",
            autoClose: 700,
            closeButton:false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: false,
        });



        isInCart ? increase(product) : addProduct(product)

    }



    useEffect(() => {
        console.log(cartItems[idx]?.quantity)
        if (isInCart) setQuantity(cartItems[idx]?.quantity)
    }, [isInCart])

    return (
        <>
            <div className={styles.modal__container}>
                <div className={styles.info__product_left}>
                    <div className={styles.img}>
                        <img src={imgModal} alt="polenta"/>
                    </div>
                    <div className={styles.title__product.hidden}>{title}</div>
                    <div className={styles.functional__product.hidden}>
                        <div className={styles.priceAddtocart}>
                            <div className={styles.price__blck}>30<span>{price}</span></div>
                            <div>
                                <div className={styles.addToCart}>
                                    <a  onClick={() => addToCart(product)} ><div>{t('addToCart')}</div></a>
                                </div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className={styles.info__container}>
                        <div className={styles.info__row}>
                            <div>{weight1}</div>
                            <div>{weight2}</div>
                        </div>
                        <div className={styles.info__row}>
                            <div>{ingredients}</div>
                            <div>{ingredients1} <br/> {ingredients2}</div>
                        </div>
                        <div className={styles.info__row}>
                            <div>{energyVal1}  <br/> {energyVal2}</div>
                            <div>{energyVal3} </div>
                        </div>
                        <div className={styles.info__row}>
                            <div>{shelfLife1}</div>
                            <div>{shelfLife2} </div>
                        </div>
                        <div className={styles.info__row}>
                            <div>{tastes1}</div>
                            <div>{tastes2}  </div>
                        </div>
                    </div>
                </div>
                <div className={styles.info__product_right}>
                    <div className={styles.title__product}>{title}</div>
                    <div className={styles.functional__product}>
                        <div className={styles.priceAddtocart}>
                            <div className={styles.price__blck}>30<span>{price}</span></div>
                            <div>
                                <div className={styles.addToCart}>
                                    <a onClick={() => addToCart(product)} ><div>{t('addToCart')}</div></a>
                                </div>
                            </div>
                        </div>
                        <Counter increase={() => increase(product)} decrease={() => decrease(product)} quantity={quantity} />
                    </div>
                    <div className={styles.txt__product}>
                        <p className={styles.txt}>
                            {productText}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ModalContent;