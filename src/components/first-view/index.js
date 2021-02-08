import Link from 'next/link';
import styles from './index.module.scss';

export const FirstView = () => {
  return (
    <section id="first-view" className={styles.first_view}>
      <img src="first-view.jpg" />
      <h2>What's Beauty Salon?</h2>
      <p>
        message message message message message
        message message message message message
        message message message message message
      </p>
      <Link href="/"><a>More...</a></Link>
    </section>
  )
}
