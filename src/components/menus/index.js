import Link from 'next/link';
import styles from './index.module.scss';

export const Menus = () => {
  return (
    <section id="menus" className={styles.menus}>
      <h2><b><i><u>MENUS</u></i></b></h2>
      <ul className={styles.menu_list}>
        <li>
          <img src="menu1.jpg" alt="" />
          <div>
            <p>title</p>
            <p>introduction</p>
          </div>
        </li>
        <li>
          <img src="menu2.jpg" alt="" />
          <div>
            <p>title</p>
            <p>introduction</p>
          </div>
        </li>
        <li>
          <img src="menu3.jpg" alt="" />
          <div>
            <p>title</p>
            <p>introduction</p>
          </div>
        </li>
        <li>
          <img src="menu4.jpg" alt="" />
          <div>
            <p>title</p>
            <p>introduction</p>
          </div>
        </li>
      </ul>
      <Link href="/"><a>More...</a></Link>
    </section>
  )
}
