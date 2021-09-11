import React from 'react'
import Header from 'components/Header/Header';
import withLocale from "hocs/withLocale";
import useTranslation from "hooks/useTranslation";
import Footer from "components/Footer/Footer";
import  styles from 'styles/Faq.module.css';


const Faq = () => {

    const { t } = useTranslation();

    return (
        <>
            <Header/>
        <section className={styles.faqPage}>
            <div className={styles.mainContainer}>
                <div className={styles.title__page}>{t('faqLabel')}</div>
                <p className={styles.txt}>{t('faq1')}
                </p>
                <div className={styles.faq__blck}>
                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('whatIsPolentha')}</div>
                        <p className={styles.txt}>{t('whatIsPolentha1')}</p>
                    </div>

                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('difference')}</div>
                        <p className={styles.txt}>{t('difference')}
                        </p>
                    </div>

                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('natural')}</div>
                        <p className={styles.txt}>{t('natural1')}</p>
                    </div>

                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('calories')}</div>
                        <p className={styles.txt}>{t('calories1')}
                        </p>
                    </div>

                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('freeze')}</div>
                        <p className={styles.txt}>{t('freeze1')}</p>
                    </div>

                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('whereToBuy')}</div>
                        <p className={styles.txt}>{t('whereToBuy1')}</p>
                    </div>

                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('directOrder')} </div>
                        <p className={styles.txt}>{t('directOrder1')}</p>
                    </div>

                    <div className={styles.question__row}>
                        <div className={styles.title_que}>{t('terms')}</div>
                        <p className={styles.txt}>{t('terms1')}</p>
                    </div>
                </div>
            </div>
        </section>
            <Footer/>
            </>

    )

}
export default withLocale(Faq);