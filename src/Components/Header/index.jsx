import styles from './Header.module.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.container}>
            <div className={styles.topHeader}>
                <div className={styles.logoContainer}>
                    <img src="/logo-luminar.png" className={styles.logo} alt="Logo luminar" />
                </div>

                <IoLogoWhatsapp className={styles.whatsappLogo} />

            </div>

            <ul>
                <nav className={styles.navContainer}>
                    <NavLink to={"/"} className={styles.navItem}>Home</NavLink>
                    <li className={styles.navItem}><a href="#">Procedimentos</a></li>
                    <NavLink to={"/contato"} className={styles.navItem}>Contato</NavLink>
                </nav>
            </ul>

           <div
                
            >
                <GiHamburgerMenu className={styles.burguerMenuIcon} />
            </div>

            <div
                isOpen={menuOpen}
                onClose={closeMenu}
                className={styles.burguerMenu}
                
            >
                <li className={styles.navItem}><a href="#">Home</a></li>
                <li className={styles.navItem}><a href="#">Procedimentos</a></li>
                <li className={styles.navItem}><a href="#">Contato</a></li>
            </div>

        </header>
    );
}

export default Header;