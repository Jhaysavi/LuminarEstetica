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

            <a href="#" className={styles.contact}>Agendar avaliação</a>
        </div>

    );
}

export default Card;