import React from 'react'
import styles from 'styles/Feedback.module.css'
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import withLocale from "hocs/withLocale";
import useTranslation from "hooks/useTranslation";

const Feedback = () => {

    const { t } = useTranslation();

    return (
        <>

            <Header/>

        <section className={styles.feedbackPage}>
            <div className={styles.mainContainer}>
                <div className={styles.title__page}>{t('feedback')}</div>
                <div className={styles.feedback__blck}>
                    <div className={styles.left__blck}>
                        <div className={styles.txt__blck}>
                            <p className={styles.txt}>{t('feedback1')}
                            </p>
                            <p className={styles.txt}>{t('feedback2')}</p>
                        </div>
                        <form action="post" className={styles.user__form}>
                            <input type="text" placeholder={t('email')}/>
                            <input type="text" placeholder={t('name')}/>
                            <input type="text" placeholder={t('lastName')}/>
                            <input type="text" placeholder={t('phone')}/>
                        </form>
                        <div className={styles.contacts__blck}>
                            <div><p className={styles.address}>{t('contacts')}: <br/><a>{t('contacts2')} <br/> {t('ltd')}</a>  </p></div>
                            <div>
                                <p className={styles.email}>Email:<a href="mailto:westecofoods@gmail.com">&nbsp;westecofoods@gmail.com</a></p>
                                <p className={styles.phone}>{t('phone')}:<a href="tel:+380673456585">&nbsp;+380673456585</a></p>
                                <p className={styles.manager}>{t('director')}:<a>&nbsp;{t('directorName')}</a></p>
                                <p>{t('phone')}:<a href="tel:+380968907676">&nbsp;+380968907676</a></p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right__blck}>
                        <form action="post" className={styles.feedback}>
                            <textarea name="" id="feedback" cols="100" rows="15"/>

                        </form>
                        <div className={styles.switch__feedback}>
                            <div className={styles.title__switch}>{t('topic')}</div>
                            <div className={styles.switch}>
                                <a href="">
                                    <div>{t('cowork')}</div>
                                </a><a href="">
                                <div>{t('other')}</div>
                            </a>
                            </div>
                            <div className={styles.btnBlck}>
                                <a><div>{t('leaveComment')}</div></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

            <Footer/>

        </>

    )

}
export default withLocale(Feedback);