import styles from 'styles/LocaleSwitcher.module.css';
import { useRouter } from "next/dist/client/router"
import { locales, languageNames } from "../../translations/config"
import { LocaleContext } from "../../context/LocaleContext"
import React from "react";

const LocaleSwitcher = () => {
    const router = useRouter()
    const { locale } = React.useContext(LocaleContext)
    const handleLocaleChange = React.useCallback(
        value => {
            const regex = new RegExp(`^/(${locales.join("|")})`)
            router.push(
                router.pathname,
                router.asPath.replace(regex, `/${value}`)
            )
        },
        [router]
    )


    return (
        <ul className={styles.switchLang}>
            <li onClick={() => handleLocaleChange('uk')} className={styles.switchItem}>UA</li>
            {/*<li className={styles.switchItem}>RU</li>*/}
            <li onClick={() => handleLocaleChange('en')} className={styles.switchItem}>EN</li>
        </ul>
    )
}

export default LocaleSwitcher;