import styles from '../../styles/Modal.module.scss';
import { useForm, ValidationError } from '@formspree/react';

export default function Modal({ showModal, setShowModal }) {

    const [state, handleSubmit] = useForm("mayzygre");

    return (
        showModal ?
            <>
                <section className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <div className={styles.close} onClick={() => setShowModal(false)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.25 6.75L6.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.75 6.75L17.25 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <div className={styles.header}>
                            <div className={styles.emailIcon}>
                                <svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_ddd_75_77974)"><path d="M26.0781 12.1562H14.9219C14.4289 12.1568 13.9563 12.3528 13.6077 12.7014C13.2591 13.05 13.063 13.5226 13.0625 14.0156V21.9844C13.063 22.4774 13.2591 22.95 13.6077 23.2986C13.9563 23.6472 14.4289 23.8432 14.9219 23.8438H26.0781C26.5711 23.8432 27.0437 23.6472 27.3923 23.2986C27.7409 22.95 27.937 22.4774 27.9375 21.9844V14.0156C27.937 13.5226 27.7409 13.05 27.3923 12.7014C27.0437 12.3528 26.5711 12.1568 26.0781 12.1562V12.1562ZM25.6073 15.2319L20.8261 18.9506C20.7328 19.0231 20.6181 19.0624 20.5 19.0624C20.3819 19.0624 20.2672 19.0231 20.1739 18.9506L15.3927 15.2319C15.3365 15.1894 15.2893 15.1363 15.2539 15.0755C15.2184 15.0146 15.1954 14.9474 15.1862 14.8776C15.177 14.8078 15.1817 14.7369 15.2001 14.6689C15.2185 14.601 15.2502 14.5374 15.2935 14.4818C15.3367 14.4263 15.3905 14.3798 15.4518 14.3452C15.5131 14.3106 15.5807 14.2886 15.6506 14.2803C15.7205 14.2721 15.7913 14.2778 15.859 14.2972C15.9267 14.3165 15.9898 14.3492 16.0448 14.3931L20.5 17.8582L24.9552 14.3931C25.0666 14.309 25.2066 14.2721 25.345 14.2904C25.4834 14.3087 25.6091 14.3808 25.6947 14.491C25.7804 14.6012 25.8193 14.7407 25.8029 14.8794C25.7866 15.018 25.7163 15.1446 25.6073 15.2319Z" fill="url(#paint0_linear_75_77974)"></path></g><defs><filter id="filter0_ddd_75_77974" x="-1.9375" y="0.15625" width="44.875" height="35.6875" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="-3"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.439216 0 0 0 0 0.882353 0 0 0 0 0.784314 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_75_77974"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.635294 0 0 0 0 0.760784 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_75_77974" result="effect2_dropShadow_75_77974"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="3"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.698039 0 0 0 0 0.141176 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="effect2_dropShadow_75_77974" result="effect3_dropShadow_75_77974"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_75_77974" result="shape"></feBlend></filter><linearGradient id="paint0_linear_75_77974" x1="13.8987" y1="23.8438" x2="29.5218" y2="23.8438" gradientUnits="userSpaceOnUse"><stop stop-color="#00C2D7"></stop><stop offset="0.78125" stop-color="#25D0AB"></stop><stop offset="1" stop-color="#F1A10D"></stop></linearGradient></defs></svg>
                            </div>
                            <h1>Contact Me</h1>
                            <p>Send a message to me and I will get back to you as soon as possible.</p>
                        </div>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full name</label>
                                <input type="text" id="name" name="name" placeholder='Enter you full name' />
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input type="text" id="email" name="email" placeholder='Enter you email adress' />
                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea type="text" id="message" rows={6} name="message" placeholder='Enter you message' />
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>
                            <button disabled={state.submitting} type="submit" className={styles.submitButton}>Submit</button>
                        </form>
                        {state.succeeded && (
                            <p className={styles.successMessage}>Thanks for contacting me!</p>
                        )}
                    </div>
                </section>
            </> : null
    )
}