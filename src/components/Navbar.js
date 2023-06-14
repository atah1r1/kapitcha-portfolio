import { useRouter } from 'next/router';
import { useEffect, useReducer } from 'react';
import styles from '../../styles/Navbar.module.scss';
import Modal from './Modal';

export default function Navbar() {

    const [isOpen, toggleIsOpen] = useReducer((state, action) => {
        return action;
    }, false);

    const router = useRouter();

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                toggleIsOpen(false);
            } else if (e.key === 'a' || e.key === 'A') {
                toggleIsOpen(true);
            }
        });
    }, []);

    return (
        <>
            <Modal showModal={isOpen} setShowModal={toggleIsOpen} />
            <section className={styles.container}>
                <div className={styles.header}>
                    <h1>Kapitcha</h1>
                    <div className={styles.rightHeader}>
                        <button className={styles.work}>
                            Work
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </button>
                        {!isOpen && <button onClick={() => toggleIsOpen(true)} className={styles.contactMe}>Contact me</button>}
                    </div>
                </div>
            </section>
        </>
    )
}