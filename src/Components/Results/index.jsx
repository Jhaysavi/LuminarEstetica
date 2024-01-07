import styles from './Results.module.css';

function Results() {
    return(
        <section className={styles.container}>

            <h2 className={styles.title}>Veja alguns resultados</h2>

            <div className={styles.containerImg}>
                <img src="src/assets/img-result1.png" className={styles.resultImg} alt="Imagem de antes e depois" />
                <img src="src/assets/img-result2.png" className={styles.resultImg} alt="Imagem de antes e depois" />
                <img src="src/assets/img-result3.png" className={styles.resultImg} alt="Imagem de antes e depois" />
                <img src="src/assets/img-result4.png" className={styles.resultImg} alt="Imagem de antes e depois" />
            </div>

            <a href="#" className={styles.contact}>Agende sua avaliação</a>

        </section>
    );
}

export default Results;