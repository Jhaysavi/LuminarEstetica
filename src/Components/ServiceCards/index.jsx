import { Link } from 'react-router-dom';
import styles from './Cards.module.css';

function Card({ image, imageAlt, title, description, price }) {
    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt={imageAlt} />
            </div>
            <div>
                <h4 className={styles.title}>{title}</h4>
            </div>
            <p className={styles.description}>{description}</p>

            <p className={styles.price}>R${price}</p>

            <Link to={"/contato"} className={styles.contact}>Agendar avaliação</Link>
        </div>

    );
}

export default Card;