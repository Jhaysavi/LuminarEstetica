import styles from './Introduction.module.css';

function Introduction() {
    return (
        <section className={styles.container}>
            <div className={styles.containerText}>
                <h2 className={styles.title}>Por que a Luminar?</h2>

                <div className={styles.text}>
                    <p>Luminar Estética, reconhecida por sua abordagem modernizada e inovadora, destaca-se pelos seguintes aspectos:</p>


                    <p>Tecnologia Avançada: Investimos em equipamentos estéticos de última geração para proporcionar tratamentos mais eficazes.</p>

                    <p>Sistema de Agendamento Online: Oferecemos conveniência aos nossos clientes, permitindo agendamentos e lembretes automáticos por meio de um sistema online.</p>

                    <p>Ambiente Acolhedor e Moderno: Nosso espaço foi projetado para ser contemporâneo, acolhedor e relaxante, proporcionando uma atmosfera agradável aos nossos clientes.</p>

                    <p>Personalização dos Tratamentos: Adotamos uma abordagem altamente personalizada, adaptando os procedimentos às necessidades individuais de cada cliente.</p>

                    <p>Presença Online Forte: Mantemos uma presença ativa nas redes sociais e em nosso site informativo para manter nossos clientes sempre atualizados.</p>

                    <p>Treinamento Contínuo da Equipe: Nossa equipe de profissionais passa por treinamentos regulares, garantindo que estejam sempre atualizados nas últimas tendências e técnicas estéticas.</p>

                    <p>Programas de Fidelidade e Descontos Exclusivos: Incentivamos a fidelização dos clientes por meio de programas de recompensas e descontos exclusivos.</p>

                    <p>A modernização da Luminar Estética vai além da estética física, abrangendo aspectos tecnológicos, estruturais e de atendimento ao cliente. Nosso compromisso é proporcionar uma experiência completa e contemporânea aos nossos clientes.</p>
                </div>
            </div>

            <div className={styles.imagesContainer}>
                <img src="src/assets/pessoaIntroducao.png" alt="pessoa alegre" />

                <div className={styles.facialImage}>
                    <img src="src/assets/facialIntoducao.png" alt="uma imagem com varios rostos juntos" />
                </div>
            </div>
        </section>
    );
}

export default Introduction;