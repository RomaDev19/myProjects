import styles from 'styles/Header.module.css';
import { useState } from "react";
import HeaderLogo from 'components/SVG/HeaderLogo';
import CartLogo from 'components/SVG/CartLogo';
import useTranslation from 'hooks/useTranslation';
import cartIcon  from 'static/img/cart.svg'
import Link from 'next/link';
import BurgerMenu from "components/ReactBurgerMenu/BurgerMenu";
import React from 'react';
import Cart from "components/Cart/Cart";


const Header = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const { t, locale } = useTranslation();




    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <>
        <Cart active={modalOpen} setActive={toggleModal} />
        <BurgerMenu />

        <div className={styles.responsiveHeader}>
            <div className={styles.responsiveContainer}>
                    <div>
                        <HeaderLogo />
                    </div>

                    <div className={styles.cartIcon} onClick={toggleModal}>
                        <img src={cartIcon}  />
                    </div>

            </div>
        </div>

        <header class={`${styles.headerArea}  ${styles.mainHeader}  `}>
                            <div className={styles.headerContainer}>
                               <nav className={styles.navLogo}>
                                    <HeaderLogo />
                                 </nav>
                              <nav className={styles.navMenu}>
                                     <ul className={styles.headerMenu}>
                                         <Link href={`/[lang]/`} as={`/${locale}/`} locale={locale}><a className={styles.menuItem}>{t('home')}</a></Link>
                                         <Link href={`/[lang]/shop`} as={`/${locale}/shop`} locale={locale}><a className={styles.menuItem}>{t('shop')}</a></Link>
                                         <Link href={`/[lang]/recipes`} as={`/${locale}/recipes`} locale={locale}><a className={styles.menuItem}>{t('recipes')}</a></Link>
                                         <Link href={`/[lang]/faq`} as={`/${locale}/faq`} locale={locale}><a className={styles.menuItem}>{t('faq')}</a></Link>
                                         <Link href={`/[lang]/feedback`} as={`/${locale}/feedback`} locale={locale}><a className={styles.menuItem}>{t('feedback')}</a></Link>
                                         <Link href={`/[lang]/contacts`} as={`/${locale}/contacts`} locale={locale}><a className={styles.menuItem}>{t('contacts')}</a></Link>
                                     </ul>
                                 </nav>
                                 <nav onClick={toggleModal} className={styles.navCart}>
                                     <CartLogo />
                                 </nav>
                             </div>
                         </header>
       </>                 
    )
}

export default Header;