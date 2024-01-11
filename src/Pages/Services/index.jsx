import Card from '../../Components/ServiceCards';
import styles from './Services.module.css';

function Services() {
    return(
        <section className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Nossos serviços</h1>
            </div>

            <div className={styles.containerCards}>
                <Card 
                image="src/assets/limpezaDePele.png"
                imageAlt="pessoa fazendo uma limpeza de pele"
                title="Limpeza de pele (profunda)"
                description="A Limpeza de Pele Profunda oferecida pela Luminar é um tratamento facial que visa remover impurezas, células mortas e comedões, proporcionando uma pele mais limpa e saudável."
                price="239,00"
                />

                <Card 
                    image="src/assets/depilacaoLaser.png"
                    imageAlt="pessoa fazendo depilação a laser"
                    title="Depilação a laser"
                    description="Tratamento a Laser para Remoção de Pelos é um procedimento estético oferecido pela Luminar que utiliza tecnologia a laser para eliminar os pelos de forma duradoura, atingindo a raiz do folículo piloso."
                    price="209,00"
                    className={styles.card}
                />

                <Card 
                    image="src/assets/radifrequenciaFacial.png"
                    imageAlt="Pessoa fazendo radifrequência facial"
                    title="Radiofrequência facial"
                    description="O tratamento de Radiofrequência Facial oferecido pela Luminar utiliza tecnologia avançada para estimular a produção de colágeno, promovendo o rejuvenescimento da pele e redução de rugas."
                    price="799,00"
                    className={styles.card}
                />

                <Card 
                    image="src/assets/massagemModeladora.png"
                    imageAlt="Pessoa fazendo massagem modeladora"
                    title="Massagem modeladora"
                    description="A Massagem Modeladora da Luminar é um tratamento estético que utiliza movimentos firmes para esculpir o corpo, combinando técnicas de drenagem linfática para redução da retenção de líquidos."
                    price="80,00"
                    className={styles.card}
                />

                <Card 
                    image="src/assets/drenagemLinfatica.png"
                    imageAlt="Pessoa fazendo drenagem linfática"
                    title="Drenagem linfática"
                    description="A Drenagem Linfática da Luminar é um tratamento que utiliza técnicas suaves para estimular o sistema linfático, promovendo a eliminação de toxinas e reduzindo a retenção de líquidos."
                    price="200,00"
                    className={styles.card}
                />

                <Card 
                    image="src/assets/peelingQuimico.png"
                    imageAlt="Pessoa fazendo peeling químico"
                    title="Peeling químico"
                    description="O Peeling Químico oferecido pela Luminar é um procedimento estético que envolve a aplicação controlada de substâncias químicas na pele, promovendo a esfoliação e remoção de camadas superficiais."
                    price="279,00"
                    className={styles.card}
                />
            </div>

        </section>
    );
}

export default Services;