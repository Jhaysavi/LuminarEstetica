import styles from './Employee.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Employee() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite:true,
                },
            }
        ]
    }
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Conheça alguns dos nossos profiossionais</h2>
            
            <Slider {...settings}>
                <div>
                    <img src="src/assets/TâniaCirurgia.jpg" alt="Cirugiâ plastica" />
                    <p className={styles.role}>Tânia-Cirugiã plastica</p>
                </div>
                <div>
                    <img src="src/assets/cosmetologa.jpg" alt="Cosmetologa" />
                    <p className={styles.role}>Joan-Cometologa</p>
                </div>
                <div>
                    <img src="src/assets/enfermeiraEsteta.jpg" alt="Enfermeira" />
                    <p className={styles.role}>Guadalupe-Enfermeira esteta</p>
                </div>
                <div>
                    <img src="src/assets/anestesista.jpg" alt="Anestesista" />
                    <p className={styles.role}>Lia-Anestesista</p>
                </div>
                <div>
                    <img src="src/assets/massagista.png" alt="Massagista" />
                    <p className={styles.role}>Phoebe-Massagista</p>
                </div>
                <div>
                    <img src="src/assets/enfermeira.png" alt="Enfermeira" />
                    <p className={styles.role}>Olga-Enfermeira</p>
                </div>
            </Slider>

        </section>

    );
}

export default Employee;