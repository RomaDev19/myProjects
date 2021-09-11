import React from 'react';
import styles from 'styles/Menu.module.css';

const Menu = ({ items = [], active, setActive}) => {
        return (
                <div className={active ? `${styles.burgerMenu} ${styles.burgerMenuActive}` : styles.burgerMenu} onClick={() => setActive(false)}>
                    <div className={styles.blur}/>
                    <div className={styles.menuContent} onClick={e => e.stopPropagation()}>
                        <ul>
                            {items.map(item => 
                                <li>
                                    <a href={item.href}>{item.value}</a>
                                </li>
                                )}
                        </ul>
                    </div>
                </div>
        );
    
};

export default Menu;
