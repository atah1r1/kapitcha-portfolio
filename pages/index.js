import styles from '../styles/Home.module.scss';
import Background from '../public/grids.svg';
import Image from 'next/image';
import dynamic from "next/dynamic"
import { useEffect, useReducer } from 'react';
import Modal from '../src/components/Modal';

export default function Home() {
  const Spline = dynamic(() => import("@splinetool/react-spline"), {
    loading: () => <p>Loading...</p>,
  })

  const [isOpen, toggleIsOpen] = useReducer((state, action) => {
    return action;
  }, false);

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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 12H4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <button onClick={() => toggleIsOpen(true)} className={styles.contactMe}>Contact me</button>
          </div>
        </div>
        <Image src={Background} alt="background_top" className={styles.image} priority></Image>
        <div className={styles.hero}>
          <div className={styles.leftHero}>
            <span className={styles.hoverMe}>Currently in beta</span>
            <h2 className={styles.hello}>Привет !</h2>
            <p className={styles.paragraph}>
              My name is <span className={styles.name}>Amine TAHIRI</span> aka KapitCha,
              <br />
              I am currently a student at 1337 School in Morocco, Benguerir.
            </p>
            <p className={styles.description}>
              I am a web developer, I love to create new things and I am always
              <br />
              looking for new challenges.
            </p>
            <p className={styles.press}>Press <span>A</span> to contact me</p>
          </div>
          <div className={styles.rightHero}>
            <Spline scene="https://prod.spline.design/x80ZL67KtZKcaFxQ/scene.splinecode" />
          </div>
        </div>
        <Image src={Background} alt="background_bottom" className={styles.imageBottom} priority></Image>
        <footer className={styles.footer}>
          <div className={styles.socialMedia}>
            <a aria-label="GitHub" target="_blank" href="https://github.com/atah1r1">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"></path>
              </svg>
            </a>
            <a aria-label="Twitter" target="_blank" href="https://twitter.com/atah1r1">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.73557 21.5C16.4127 21.5 21.16 14.1894 21.16 7.85156C21.16 7.64604 21.1555 7.43595 21.1465 7.23043C22.07 6.55142 22.867 5.71038 23.5 4.74682C22.6399 5.13587 21.7267 5.38995 20.7917 5.5004C21.7762 4.90038 22.5134 3.95779 22.8666 2.84735C21.9404 3.40543 20.9274 3.79911 19.8712 4.01151C19.1596 3.24272 18.2186 2.73369 17.1939 2.56312C16.1691 2.39255 15.1176 2.56994 14.202 3.06786C13.2864 3.56579 12.5576 4.35651 12.1283 5.31779C11.699 6.27906 11.5931 7.35734 11.827 8.38592C9.95155 8.29023 8.11677 7.7949 6.44165 6.93203C4.76653 6.06916 3.28846 4.85803 2.10326 3.37713C1.50088 4.43303 1.31655 5.68251 1.58774 6.87162C1.85892 8.06072 2.56527 9.10024 3.56322 9.77889C2.81402 9.75471 2.08123 9.54963 1.42539 9.1806V9.23997C1.42472 10.3481 1.80151 11.4222 2.49171 12.2798C3.18192 13.1374 4.14293 13.7255 5.21141 13.9441C4.51739 14.1372 3.78898 14.1653 3.08256 14.0263C3.38406 14.9793 3.97067 15.8128 4.76053 16.4105C5.55039 17.0082 6.50407 17.3402 7.4885 17.3603C5.81724 18.695 3.75275 19.419 1.62754 19.4156C1.25065 19.415 0.874132 19.3915 0.5 19.3452C2.65899 20.7534 5.17047 21.5014 7.73557 21.5Z" fill="currentColor"></path></svg>
            </a>
            <a aria-label="Linkedin" target="_blank" href="https://linkedin.com/in/atah1r1">
              <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M5.58648 7.72107H0.768444C0.554612 7.72107 0.381348 7.89441 0.381348 8.10817V23.5865C0.381348 23.8003 0.554612 23.9736 0.768444 23.9736H5.58648C5.80032 23.9736 5.97358 23.8003 5.97358 23.5865V8.10817C5.97358 7.89441 5.80032 7.72107 5.58648 7.72107Z" fill="currentColor"></path><path d="M3.1793 0.0264282C1.42622 0.0264282 0 1.4511 0 3.20225C0 4.95417 1.42622 6.37938 3.1793 6.37938C4.93099 6.37938 6.35605 4.95409 6.35605 3.20225C6.35613 1.4511 4.93099 0.0264282 3.1793 0.0264282Z" fill="currentColor"></path><path d="M17.8417 7.33636C15.9066 7.33636 14.4762 8.16824 13.6085 9.11345V8.10816C13.6085 7.8944 13.4353 7.72106 13.2214 7.72106H8.60731C8.39348 7.72106 8.22021 7.8944 8.22021 8.10816V23.5865C8.22021 23.8003 8.39348 23.9735 8.60731 23.9735H13.4148C13.6287 23.9735 13.8019 23.8003 13.8019 23.5865V15.9283C13.8019 13.3477 14.5029 12.3423 16.3018 12.3423C18.261 12.3423 18.4167 13.954 18.4167 16.0611V23.5865C18.4167 23.8004 18.5899 23.9736 18.8038 23.9736H23.613C23.8269 23.9736 24.0001 23.8004 24.0001 23.5865V15.0964C24.0001 11.2591 23.2684 7.33636 17.8417 7.33636Z" fill="currentColor"></path></svg>
            </a>
          </div>
          <div className={styles.policy}>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Terms of Use</a>
          </div>
        </footer>
      </section>
    </>
  )
}
