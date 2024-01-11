import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import styles from './Contact.module.css';

function Contact() {
    const validationSchema = yup.object({
        name: yup
            .string()
            .min(4, "Nome inválido")
            .required("Preencha seu nome"),
        email: yup
            .string()
            .email("Digite um email válido")
            .required("E-mail é obrigatŕio"),
        phone: yup
            .string()
            .min(11, "Digite o número com DDD")
            .max(14, "Número invalido")
            .required("Telefone é obrigatório"),
        service: yup
            .string()
            .required("Preencha o serviço de seu interese ou escreva avaliação geral")
            .max(200, "Limite de 200 caracteres"),
        terms: yup
            .boolean()
            .oneOf([true],"Para agendar é necessário aceitar os termos.")
    })
    return (
        <>
            <section className={styles.hero}>
                <h4 className={styles.heroText}>Seu Centro de Estética no DF. Realce sua beleza através dos nossos tratamentos estéticos de alta qualidade!</h4>
            </section>

            <Formik
                initialValues={{ name: "",email:"",phone:"",service:"",terms:false, }}
                validationSchema={validationSchema}
                
            >
                <section className={styles.container}>
                    <h2 className={styles.title}>Agende sua avaliação!</h2>

                    <form action="https://formsubmit.co/b1b13c5302d41dd14be8a1bdbcab5697" method='POST' className={styles.form} >

                        <fieldset className={styles.group}>

                            <label htmlFor="name" className={styles.label}>Nome</label>
                            <Field
                                type="text"
                                name="name"
                                className={styles.input}
                            />
                            <ErrorMessage component="p" name="name" className={styles.error} />
                        </fieldset>

                        <fieldset className={styles.group}>
                            <label htmlFor="email" className={styles.label}>E-mail</label>
                            <Field
                                type="email"
                                name="email"
                                className={styles.input}
                                placeholder="seuEmail@exemplo.com"
                            />
                            <ErrorMessage component="p" name="email" className={styles.error} />
                        </fieldset>

                        <fieldset className={styles.group}>
                            <label htmlFor="phone" className={styles.label}>Telefone(com DDD)</label>
                            <Field
                                type="tel"
                                name="phone"
                                className={styles.input}
                                placeholder="(xx)x xxxx-xxxx"
                            />
                            <ErrorMessage component="p" name="phone" className={styles.error} />
                        </fieldset>

                        <fieldset className={styles.group}>
                            <label htmlFor="service" className={styles.label}>Escreva aqui os serviços de seu interesse:</label>
                            <div className={styles.service}>
                                <Field
                                    as="textarea"
                                    name="service"        
                                    className={styles.service}
                                />
                                <ErrorMessage component="p" name="service" className={styles.error} />
                            </div>
                        </fieldset>

                        <fieldset className={styles.group}>
                            <Field
                                type="checkbox"
                                name="terms"
                            />
                            <label htmlFor="terms" className={styles.terms}>Eu aceito os termos de usos e politicas de dados.</label>
                            <ErrorMessage component="p" name="terms" className={styles.error} />
                        </fieldset>

                        <fieldset className={styles.group}>
                            <input type="checkbox" name="terms" id="whatsapp" />
                            <label htmlFor="whatsapp" className={styles.terms}>Eu aceito ser contatado via whatsapp.</label>
                        </fieldset>
                        <button type='submit' className={styles.button}>Agendar</button>
                    </form>

                </section>
            </Formik>
        </>
    );
}

export default Contact;
