import React, {useState} from 'react';
import styles from 'styles/Shop.module.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import withLocale from "hocs/withLocale";
import useTranslation from "hooks/useTranslation";
import storeItems from 'store/index';
import ProductCard from "components/ProductCard";
import ProductModal from "components/ProductModal/ProductModal";
import ProductModalContent from "components/ProductModalContent/ProductModalContent";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
    const { t, locale } = useTranslation();
    const [modalActive, setModalActive] = useState(false)
    const [productModal, setProductModal] = useState({});

    const openModal = (id) => {
        const item = storeItems[locale].find(item => item.id === id)
        setProductModal(item);
        setModalActive(true)
    }
    
        return (
            <>
                <Header />
            <section className={styles.shopPage}>
                <nav className={styles.bannerSec}>
                    <div className={styles.bannerContainer}>
                        <div className={styles.showcaseBlck}>
                             <div>
                                 {
                                     storeItems[locale].map((product)=>{
                                      return   <ProductCard product={product} openModal={openModal}  />
                                     })
                                 }
                             </div>
                           
                        </div>  
                    </div> 
                </nav>
                <ProductModal active={modalActive} setActive={setModalActive}>
                    <ProductModalContent product={productModal}/>
                </ProductModal>
                
            </section>
                <ToastContainer
                    toastClassName={styles.notificationAddToCart}
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={true}
                    limit={1}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                >
                </ToastContainer>
        <Footer />
         </>   
        )
}

export default withLocale(Shop);