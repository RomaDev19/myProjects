import React, {useContext} from 'react';
import styles from "styles/Shop.module.css";
import ButtonBuy from "components/ButtonBuy/ButtonBuy";
import useTranslation from "hooks/useTranslation";
import { CartContext } from "context/CartContext";
import { toast } from "react-toastify";


const ProductCard = ({product, openModal}) => {

    const { title, img, weight, id } = product;

    const { addProduct, increase, cartItems } = useContext(CartContext)


    const isInCart = !!cartItems.find(item => item.id === id)

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



    const { t } = useTranslation();



    return (
        <div className={styles.showcaseItem}>
            <div>
                <div className={styles.imgTitle}>
                    <img src={img} alt=""/>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.price}>
                    <div className={styles.dishOutlet}>{t("weight")}</div>
                    <div onClick={() => addToCart(product)} >

                           <ButtonBuy/>

                    </div>
                </div>
                <div className={styles.info}>
                    <div onClick={() => openModal(id)} className={styles.btnBlck2}>
                        <div><span>{t('more')}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;