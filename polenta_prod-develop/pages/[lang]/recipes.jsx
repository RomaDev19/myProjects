import React, { Component } from 'react'
import styles from 'styles/recipes.module.css';
import withLocale from "hocs/withLocale";
import useTranslation from "hooks/useTranslation";
import parse from 'html-react-parser';
import img1 from 'static/img/recipesStock_1.png';
import img2 from 'static/img/recipesStock_2.png';
import img3 from 'static/img/recipesStock_3.png';
import img4 from 'static/img/recipesStock_4.png';
import img5 from 'static/img/recipesStock_5.png';
import img6 from 'static/img/recipesStock_6.png';
import img7 from 'static/img/recipesStock_7.png';
import img8 from 'static/img/recipesStock_8.png';
import img9 from 'static/img/recipesStock_9.png';
import img10 from 'static/img/recipesStock_10.png';
import img11 from 'static/img/recipesStock_11.png';
import img12 from 'static/img/recipesStock_12.png';
import img13 from 'static/img/recipesStock_13.png';
import img14 from 'static/img/recipesStock_14.png';
import img15 from 'static/img/recipesStock_15.png';
import img16 from 'static/img/recipesStock_16.png';
import img17 from 'static/img/recipesStock_17.png';
import img18 from 'static/img/recipesStock_18.png';
import img20 from 'static/img/recipesStock_20.png';
import img21 from 'static/img/recipesStock_21.png';
import img22 from 'static/img/recipesStock_22.png';
import img23 from 'static/img/recipesStock_23.png';
import img24 from 'static/img/recipesStock_24.png';
import img25 from 'static/img/recipesStock_25.png';
import star from 'static/img/star.svg';
import clock from 'static/img/clock.svg';
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Link from 'next/link'


const Recipes = () => {

    const { t, locale } = useTranslation();

    return (
        <>
            <Header />
        <section className={styles.recipesStockPage}>
            <div className={styles.mainContainer}>
                <div className={styles.title__page}>{t('recipes')}</div>
                <div className={styles.recipes__stock}>
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe1`} as={`/${locale}/recipe1`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img1} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{ parse(t('recipe')) }</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 4  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>15 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe1`} as={`/${locale}/recipe1`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe2`} as={`/${locale}/recipe2`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img2} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe1')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 4  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>15 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe2`} as={`/${locale}/recipe2`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe3`} as={`/${locale}/recipe3  `}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img3} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe2')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 11  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>20-30 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe3`} as={`/${locale}/recipe3`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe4`} as={`/${locale}/recipe4`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img4} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{parse(t('recipe3'))}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 9  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>~1 {t('h')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe4`} as={`/${locale}/recipe4`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe5`} as={`/${locale}/recipe5`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img5} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{ parse(t('recipe4')) }</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 8  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>30 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe4`} as={`/${locale}/recipe5`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe6`} as={`/${locale}/recipe6`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img6} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe5')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 13  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>40-50 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe6`} as={`/${locale}/recipe6`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe7`} as={`/${locale}/recipe7`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img7} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe6')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 4  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>20-30 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe7`} as={`/${locale}/recipe7`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe8`} as={`/${locale}/recipe8`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img8} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe7')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 13  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>50 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe8`} as={`/${locale}/recipe8`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe9`} as={`/${locale}/recipe9`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img9} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{ parse(t('recipe8')) }</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 8  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>25-30 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe9`} as={`/${locale}/recipe9`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe10`} as={`/${locale}/recipe10`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img10} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{ parse(t('recipe9')) }</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 4  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>25 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>Рейтинг страви</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe10`} as={`/${locale}/recipe10`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe11`} as={`/${locale}/recipe11`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img11} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe10')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 2  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>20 хв</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe11`} as={`/${locale}/recipe11`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe12`} as={`/${locale}/recipe12`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img12} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe11')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 8  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>25 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe12`} as={`/${locale}/recipe12`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe13`} as={`/${locale}/recipe13`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img13} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe12')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 6  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>15 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe13`} as={`/${locale}/recipe13`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe14`} as={`/${locale}/recipe14`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img14} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{ parse(t('recipe13')) }</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 7  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>20 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe14`} as={`/${locale}/recipe14`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe15`} as={`/${locale}/recipe15`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img15} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe14')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 11  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>45-50 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe15`} as={`/${locale}/recipe15`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe16`} as={`/${locale}/recipe16`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img16} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe15')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 10  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>1 {t('h')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe16`} as={`/${locale}/recipe16`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe17`} as={`/${locale}/recipe17`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img17} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe16')}</div>
                                <div className={styles.amount__ingredient}> {t('ingredientCount')} 4  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>20 {t('min')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe17`} as={`/${locale}/recipe17`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.recipes__item}>
                        <div>
                            <div className={styles.img__blck}>
                                <Link href={`/[lang]/recipe18`} as={`/${locale}/recipe18`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                <img src={img18} alt=""/>
                            </div>
                            <div className={styles.info__blck}>
                                <div className={styles.title__recipe}>{t('recipe17')}</div>
                                <div className={styles.amount__ingredient}>{t('ingredientCount')} 9  </div>
                                <div className={styles.time}><img src={clock} alt="star"/>1.5 {t('h')}</div>
                                <div className={styles.rating__recipe}>
                                    <div>{t('dishRating')}</div>
                                    <div className={styles.stars}>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                        <a><img src={star} alt="star"/></a>
                                    </div>
                                </div>
                                <div className={styles.prepare__btn}>
                                    <div className={styles.btnBlck}>
                                        <Link href={`/[lang]/recipe18`} as={`/${locale}/recipe18`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* recipes__item */}
                    {/* recipes__item */}
                    <div className={styles.title__page}>{t('vegan')}</div>
                    <div className={styles.recipes__stock}>
                        {/* recipes__item */}
                        <div className={styles.recipes__item}>
                            <div>
                                <div className={styles.img__blck}>
                                    <Link href={`/[lang]/recipe19`} as={`/${locale}/recipe19`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                    <img src={img20} alt=""/>
                                </div>
                                <div className={styles.info__blck}>
                                    <div className={styles.title__recipe}>{t('recipe18')}</div>
                                    <div className={styles.amount__ingredient}>{t('ingredientCount')} 3  </div>
                                    <div className={styles.time}><img src={clock} alt="star"/>20 {t('min')}</div>
                                    <div className={styles.rating__recipe}>
                                        <div>{t('dishRating')}</div>
                                        <div className={styles.stars}>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                        </div>
                                    </div>
                                    <div className={styles.prepare__btn}>
                                        <div className={styles.btnBlck}>
                                            <Link href={`/[lang]/recipe19`} as={`/${locale}/recipe19`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* recipes__item */}
                        {/* recipes__item */}
                        <div className={styles.recipes__item}>
                            <div>
                                <div className={styles.img__blck}>
                                    <Link href={`/[lang]/recipe20`} as={`/${locale}/recipe20`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                    <img src={img21} alt=""/>
                                </div>
                                <div className={styles.info__blck}>
                                    <div className={styles.title__recipe}>{t('recipe19')}</div>
                                    <div className={styles.amount__ingredient}>{t('ingredientCount')} 3  </div>
                                    <div className={styles.time}><img src={clock} alt="star"/>5 {t('min')}</div>
                                    <div className={styles.rating__recipe}>
                                        <div>{t('dishRating')}</div>
                                        <div className={styles.stars}>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                        </div>
                                    </div>
                                    <div className={styles.prepare__btn}>
                                        <div className={styles.btnBlck}>
                                            <Link href={`/[lang]/recipe20`} as={`/${locale}/recipe20`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* recipes__item */}
                        {/* recipes__item */}
                        <div className={styles.recipes__item}>
                            <div>
                                <div className={styles.img__blck}>
                                    <Link href={`/[lang]/recipe21`} as={`/${locale}/recipe21`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                    <img src={img22} alt=""/>
                                </div>
                                <div className={styles.info__blck}>
                                    <div className={styles.title__recipe}>{t('recipe20')}</div>
                                    <div className={styles.amount__ingredient}>{t('ingredientCount')} 2   </div>
                                    <div className={styles.time}><img src={clock} alt="star"/>10 {t('min')}</div>
                                    <div className={styles.rating__recipe}>
                                        <div>{t('dishRating')}</div>
                                        <div className={styles.stars}>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                        </div>
                                    </div>
                                    <div className={styles.prepare__btn}>
                                        <div className={styles.btnBlck}>
                                            <Link href={`/[lang]/recipe21`} as={`/${locale}/recipe21`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* recipes__item */}
                        {/* recipes__item */}
                        <div className={styles.recipes__item}>
                            <div>
                                <div className={styles.img__blck}>
                                    <Link href={`/[lang]/recipe22`} as={`/${locale}/recipe22`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                    <img src={img23} alt=""/>
                                </div>
                                <div className={styles.info__blck}>
                                    <div className={styles.title__recipe}>{t('recipe21')}</div>
                                    <div className={styles.amount__ingredient}>{t('ingredientCount')}: 4  </div>
                                    <div className={styles.time}><img src={clock} alt="star"/>15 {t('min')}</div>
                                    <div className={styles.rating__recipe}>
                                        <div>{t('dishRating')}</div>
                                        <div className={styles.stars}>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                        </div>
                                    </div>
                                    <div className={styles.prepare__btn}>
                                        <div className={styles.btnBlck}>
                                            <Link href={`/[lang]/recipe22`} as={`/${locale}/recipe22`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* recipes__item */}
                        {/* recipes__item */}
                        <div className={styles.recipes__item}>
                            <div>
                                <div className={styles.img__blck}>
                                    <Link href={`/[lang]/recipe23`} as={`/${locale}/recipe23`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                    <img src={img24} alt=""/>
                                </div>
                                <div className={styles.info__blck}>
                                    <div className={styles.title__recipe}>{t('recipe22')}</div>
                                    <div className={styles.amount__ingredient}>{t('ingredientCount')} 5  </div>
                                    <div className={styles.time}><img src={clock} alt="star"/>20 {t('min')}</div>
                                    <div className={styles.rating__recipe}>
                                        <div>{t('dishRating')}</div>
                                        <div className={styles.stars}>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                        </div>
                                    </div>
                                    <div className={styles.prepare__btn}>
                                        <div className={styles.btnBlck}>
                                            <Link href={`/[lang]/recipe23`} as={`/${locale}/recipe23`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* recipes__item */}
                        {/* recipes__item */}
                        <div className={styles.recipes__item}>
                            <div>
                                <div className={styles.img__blck}>
                                    <Link href={`/[lang]/recipe24`} as={`/${locale}/recipe24`}><a className={styles.link}><div className={styles.hover}><a>{t('cook')}</a></div></a></Link>
                                    <img src={img25} alt=""/>
                                </div>
                                <div className={styles.info__blck}>
                                    <div className={styles.title__recipe}>{t('recipe23')}</div>
                                    <div className={styles.amount__ingredient}>{t('ingredientCount')} 4  </div>
                                    <div className={styles.time}><img src={clock} alt="star"/>30 {t('min')}</div>
                                    <div className={styles.rating__recipe}>
                                        <div>{t('dishRating')}</div>
                                        <div className={styles.stars}>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                            <a><img src={star} alt="star"/></a>
                                        </div>
                                    </div>
                                    <div className={styles.prepare__btn}>
                                        <div className={styles.btnBlck}>
                                            <Link href={`/[lang]/recipe24`} as={`/${locale}/recipe24`}><a className={styles.link}><div>{t('cook')}</div></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* recipes__item */}
                 </div>
              </div>
            </div>
        </section>


           <Footer />
         </>

    )

}
export default withLocale(Recipes);