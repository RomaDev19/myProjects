import React from 'react'
import styles from 'styles/Contacts.module.css';
import withLocale from "hocs/withLocale";
import useTranslation from "hooks/useTranslation";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";

const Contacts = () => {

    const { t } = useTranslation();

    return (
        <>
            <Header/>
        <section className={styles.contactsPage}>
            <div className={styles.mainContainer}>
                <div className={styles.title__page}>{t('contacts')}</div>
                <div className={styles.contacts__blck}>
                    <div className={styles.top__blck}>
                        <p className={styles.address}>{t('contacts1')}</p>
                        <p className={styles.address}>{t('contacts2')}</p>
                        <p className={styles.email}>E-mail:<a href="mailto:westecofoods@gmail.com">&nbsp;westecofoods@gmail.com</a></p>
                        <p className={styles.phone}>{t('phone')}:<a href="tel:+380673456585">&nbsp;+380673456585</a></p>


                    </div>
                    <div className={styles.bottom__blck}>
                        <div className={styles.maps__blck}>
                            <div className={styles.map}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6121.857374780689!2d30.43833950344793!3d49.825094339109235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d3651b3cf2014f%3A0xd92c0c1bff802daa!2z0KHQn9Ce0JbQmNCS0KfQlSDQotCe0JLQkNCg0JjQodCi0JLQniAi0JPQntCh0J_QntCU0JDQoNCa0JAi!5e0!3m2!1sru!2sua!4v1616408483570!5m2!1sru!2sua"   allowfullscreen="" loading="lazy"/></div>
                            <div className={styles.map}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5080.297625665839!2d30.430693644690255!3d50.4569535095425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd31074fa503%3A0xb2ab9d0e4a822c8f!2z0L_RgNC-0YHQv9C10LrRgiDQn9C10YDQtdC80L7Qs9C4LCA1Mywg0LHRg9C0LiAxNiwg0JrQuNGX0LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1616408654526!5m2!1sru!2sua"   allowfullscreen="" loading="lazy"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        </>

    )

}
export default withLocale(Contacts);