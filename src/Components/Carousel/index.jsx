import styles from './Carousel.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:5000,
        responsive: [
            {
                breackpoint: 768,
            },
            {
                breackpoint: 480,
            }
        ]
    }
    return (
        <Slider  {...settings}>
            <div className={styles.container}>
                <img src="src/assets/BOTOX.jpg" className={styles.carouselImage} alt="Apicação botox" />
            </div>
            <div className={styles.container}>
                <img src="src/assets/high-angle-woman-getting-massaged-spa_23-2149871240.jpg" className={styles.carouselImage} alt="spa massagem facial" />
            </div>
            <div className={styles.container}>
                <img src="src/assets/laser-epilation-hair-removal-therapy_1303-23974.jpg" className={styles.carouselImage} alt="depilação a laser" />
            </div>
            <div>
                <img src="src/assets/Massagem Modeladora e Drenagem Linfática:.jpg" className={styles.carouselImage} alt="massagem e drenagem" />
            </div>
            <div className={styles.container}>
                <img src="src/assets/preenchimento labia.jpg" className={styles.carouselImage} alt="preenchimento labial" />
            </div>
            <div className={styles.container}>
                <img src="src/assets/Radiofrequência Facial:.jpg" className={styles.carouselImage} alt="radiofrequência" />
            </div>
            <div className={styles.container}>
                <img src="src/assets/TOXINA BOTULÍNICA.jpg" className={styles.carouselImage} alt="toxina botulinica" />
            </div>
        </Slider>
    );
}

export default Carousel;