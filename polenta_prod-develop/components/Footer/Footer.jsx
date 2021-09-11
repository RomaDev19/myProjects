import React from 'react';
import styles from 'styles/Footer.module.css';
import FbLogo from '../SVG/FbLogo';
import FooterLogo from '../SVG/FooterLogo';
import InstaLogo from '../SVG/InstaLogo';
import useTranslation from 'hooks/useTranslation';
import LocaleSwitcher from "components/LocaleSwitcher/LocaleSwitcher";
import Link from "next/link";



const Footer = () => {

    const { locale, t } = useTranslation();

    return (
        <footer className={styles.footerArea}>    
        <div className={styles.footerContainer}>
            <nav className={styles.navLogo}>
                <a href="#"><FooterLogo/></a>
            </nav>
            <nav className={styles.navMenu}>
                <ul className={styles.footerMenu}>
                    <Link href={`/[lang]/`} as={`/${locale}/`} locale={locale}><a className={styles.menuItem}><li>{t('home')}</li></a></Link>
                    <Link href={`/[lang]/shop`} as={`/${locale}/shop`} locale={locale}><a className={styles.menuItem}><li>{t('shop')}</li></a></Link>
                    <Link href={`/[lang]/recipes`} as={`/${locale}/recipes`} locale={locale}><a className={styles.menuItem}>{t('recipes')}</a></Link>
                    
                </ul>
                <ul className={styles.footerMenu}>
                    <Link href={`/[lang]/faq`} as={`/${locale}/faq`} locale={locale}><a className={styles.menuItem} ><li>{t('faq')}</li></a></Link>
                    <Link href={`/[lang]/feedback`} as={`/${locale}/feedback`} locale={locale}><a className={styles.menuItem} ><li>{t('feedback')}</li></a></Link>
                    <Link href={`/[lang]/contacts`} as={`/${locale}/contacts`} locale={locale}><a className={styles.menuItem} ><li>{t('contacts')}</li></a></Link>
                </ul>
            </nav>
            <nav className={styles.navAddress}>
                <div className={styles.footerAddress}>
                    <h3>{t('address1')}</h3>
                    <p>{t('address2')}<br/> {t('address3')}</p>
                    <p className="email">E-mail:<a href="mailto:westecofoods@gmail.com">&nbsp;westecofoods@gmail.com</a></p>
                    <p className="phone">{t('phone')}:<a href="tel:+380673456585">&nbsp;+380673456585</a></p>
                </div>
            </nav>
            <nav className={styles.navContainer}>
                    <div className={styles.footerSoc}>
                        <h3>{t('socials')}</h3>
                        <div className={styles.socBlock}>
                            <a href="" className={styles.inst}><InstaLogo /></a>
                            <a href="" className={styles.face}><FbLogo /></a>
                        </div>
                    </div>
                </nav>

            <LocaleSwitcher />
        
        </div>
    </footer>
    )
}

export default Footer;