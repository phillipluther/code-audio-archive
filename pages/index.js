import styles from '../styles/Home.module.css';
import Logo from './code-audio-logo-inverse.inline.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.hidden}>Code.Audio</h1>
      <Logo aria-hidden={true} />
      <p className={styles.blurb}>This Could Be Something Soon</p>
    </div>
  );
}
