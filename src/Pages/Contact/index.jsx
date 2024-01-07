import styles from './Contact.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório.'),
    email: yup.string().email('Email inválido').required('E-mail é obrgatório.'),
    phone: yup.string().required('Celular é obrigatório.'),
    service: yup.string().required('Preencha o serviço desejado ou coloque avaliação geral'),
    terms: yup.boolean().oneOf([true], 'Para agendar aceite os termos.')
})

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(formState.errors)
        console.log(data);
    }

    console.log(errors)
    return (
        <>
            <section className={styles.hero}>
                <h4 className={styles.heroText}>Seu Centro de Estética no DF. Realce sua beleza através dos nossos tratamentos estéticos de alta qualidade!</h4>
            </section>

            <section className={styles.container}>
                <h2 className={styles.title}>Agende sua avaliação!</h2>

                <form action="https://formsubmit.co/b1b13c5302d41dd14be8a1bdbcab5697" method='POST' className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                    <fieldset className={styles.group}>

                        <label htmlFor="name" className={styles.label}>Nome</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className={styles.input}
                            minLength={4}
                            {...register('name')}
                        />
                        <p className={styles.error}>{errors?.name?.message}</p>
                    </fieldset>

                    <fieldset className={styles.group}>
                        <label htmlFor="email" className={styles.label}>E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className={styles.input}
                            placeholder="seuEmail@exemplo.com"
                            {...register('email')}
                        />
                        <p className={styles.error}>{errors.email?.message}</p>
                    </fieldset>

                    <fieldset className={styles.group}>
                        <label htmlFor="phone" className={styles.label}>Celular</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className={styles.input}
                            placeholder="(xx)x xxxx-xxxx"
                            pattern="\([0-9]{2}\)[0-9]{4,5}-[0-9]{4}"
                            minLength={11}
                            maxLength={14}
                            {...register('phone')}
                        />
                        <p className={styles.error}>{errors.phone?.message}</p>
                    </fieldset>

                    <fieldset className={styles.group}>
                        <label htmlFor="service" className={styles.label}>Escreva aqui os serviços de seu interesse:</label>
                        <div className={styles.service}>
                            <textarea
                                name="service"
                                required
                                id="service"
                                cols="40"
                                rows="10"
                                maxLength={200}
                                {...register('service')}
                            >
                            </textarea>
                            <p className={styles.error}>{errors.service?.message}</p>
                        </div>
                    </fieldset>

                    <fieldset className={styles.group}>
                        <input type="checkbox" required name="terms" id="terms" {...register('terms')} />
                        <label htmlFor="terms" className={styles.terms}>Eu aceito os termos de usos e politicas de dados.</label>
                        <p className={styles.error}>{errors.terms?.message}</p>
                    </fieldset>

                    <fieldset className={styles.group}>
                        <input type="checkbox" name="terms" id="whatsapp" />
                        <label htmlFor="whatsapp" className={styles.terms}>Eu aceito ser contatado via whatsapp.</label>
                    </fieldset>
                    <button type='submit' className={styles.button}>Agendar</button>
                </form>

            </section>
        </>
    );
}

export default Contact;
