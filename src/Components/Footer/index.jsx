import styles from './Footer.module.css';
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";

function Footer() {
    return (
        <footer className={styles.container}>
            <div>
                <p className={styles.footerText}>LUMINAR ESTÉTICA/ CNPJ  20.336.505/0001-39</p>
            </div>

            <div className={styles.containerContact}>
                <div className={styles.logoContainer}>
                    <img src="/logo-luminar.png" className={styles.logo} alt="Logo luminar" />
                </div>

                <div>
                    <h4 className={styles.title}>CONTATO</h4>
                    <div className={styles.line}></div>
                    <p className={styles.text}>Email:estética@suport.com</p>
                    <p className={styles.text}>Telefone: 3333-3333</p>
                </div>

                <div>
                    <h4 className={styles.title}>REDES SOCIAIS</h4>
                    <div className={styles.line}></div>
                    <ul>
                        <nav className={styles.sociaMedia}>
                            <li>
                                <a href="https://www.instagram.com/" className={styles.socialMediaIcon}>
                                    <FaInstagramSquare />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.whatsapp.com/" className={styles.socialMediaIcon}>
                                    <IoLogoWhatsapp />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.tiktok.com/" className={styles.socialMediaIcon}>
                                    <FaTiktok />
                                </a>
                            </li>
                        </nav>
                    </ul>
                </div>
            </div>

            <div>
                <p className={styles.adreess}>CEP:18136-871  - ENDEREÇO:  Rua Fernão-Pires - NÚRMERO: 509 - BAIRRO: Vinhedos - ESTADO: SP</p>
            </div>
        </footer>
    );
}

export default Footer;