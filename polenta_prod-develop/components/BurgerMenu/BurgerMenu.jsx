import React, {useState} from 'react';
import Menu from '../Menu/Menu';
import styles from '../../styles/BurgerMenu.module.css';
import logo from '../../static/img/logo_header.svg';
import cart from '../../static/img/cart.svg'



const BurgerMenu = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [{value:"Головна", href: '/main'},
                    {value:"Магазин", href: '/shop'},
                    {value:"Рецепти", href: '/recipes'},
                    {value:"Поширені запитання", href: '/faq'},
                    {value:"Зворотній зв’язок", href: '/feedback'},
                    {value:"Контакти", href: '/contacts'},]

    return (
        <>

            <header className={[styles.navBurger,  styles.responiveHeader].join(" ")}>
                    <div className={styles.burgerContainer}>


                        <div className={styles.burgerBtn}  onClick={() => setMenuActive(!menuActive)}>
                            <span/>
                        </div>
                        <nav className={styles.navLogo}>
                            <a href="#"><img src={logo} /></a>
                        </nav>

                        <nav className={styles.navCart}>
                            <a href="#" ><img src={cart} /></a>
                        </nav>
                    </div>
                </header>
            <Menu active={menuActive} setActive={setMenuActive} headerBurger={'Burger menu'} items={items}/>
        </>
    )
}

export default BurgerMenu;
