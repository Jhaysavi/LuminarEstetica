import styles from './Header.module.css';
import { IoLogoWhatsapp } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                    <NavLink className={styles.navItem} to={"/servicos"} >Procedimentos</NavLink>
                    <NavLink to={"/contato"} className={styles.navItem}>Contato</NavLink>
                </nav>
            </ul>

            <div className={styles.hamburgerContainer}>
                <div>
                    <GiHamburgerMenu className={styles.hamburgerIcon} onClick={toggleMenu} />
                </div>


                {menuOpen && (
                    <nav className={styles.menuContainer}>
                        <NavLink to="/" className={styles.navItem} onClick={toggleMenu}>
                            Home
                        </NavLink>
                        <a href="#" className={styles.navItem} onClick={toggleMenu}>
                            Procedimentos
                        </a>
                        <NavLink to="/contato" className={styles.navItem} onClick={toggleMenu}>
                            Contato
                        </NavLink>
                    </nav>
                )}

            </div>


        </header>
    );
}

export default Header;