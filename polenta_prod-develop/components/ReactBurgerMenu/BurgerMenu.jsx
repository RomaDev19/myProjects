import { slide as Menu } from 'react-burger-menu';
import React from 'react';
import styles from './BurgerMenu.module.css';
import useTranslation from "hooks/useTranslation";
import Link from 'next/link';

const BurgerMenu = () => {

    const { t, locale } = useTranslation();

    return (
        <Menu className={styles.burgerMenu}
              itemListClassName={styles.itemList}
              width={ '70%' }
              isOpen={false} menuClassName={styles.menu}
              burgerButtonClassName={styles.burgerButton}
              disableAutoFocus
              burgerBarClassName={styles.burgerBar} >
            <ul>
                <Link href={`/[lang]/`} as={`/${locale}/`} locale={locale}><a className={styles.linkItem}><li className={styles.burgerItem}>{t('home')}</li></a></Link>
                <Link href={`/[lang]/shop`} as={`/${locale}/shop`} locale={locale}><a className={styles.linkItem}><li className={styles.burgerItem}>{t('shop')}</li></a></Link>
                <Link href={`/[lang]/recipes`} as={`/${locale}/recipes`}><a className={styles.linkItem}><li className={styles.burgerItem}>{t('recipes')}</li></a></Link>
                <Link href={`/[lang]/faq`} as={`/${locale}/faq`}><a className={styles.linkItem}><li className={styles.burgerItem}>{t('faq')}</li></a></Link>
                <li className={styles.burgerItem}>{t('feedback')}</li>
                <li className={styles.burgerItem}>{t('contacts')}</li>
            </ul>
        </Menu>
    )
}

export default BurgerMenu;