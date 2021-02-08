import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.scss';

export const BottomMenu = () => {
  const [isOpenMenuBar, setMenuBar] = useState(true);
  useEffect(() => {
    let startY;
    let moveY;
    addEventListener("touchstart", (e) => startY = e.touches[0].pageY);
    addEventListener("touchmove", (e) => moveY = e.changedTouches[0].pageY);
    addEventListener("touchend", () => {
      if (startY > moveY) { setMenuBar(false) }
      else if (startY < moveY) { setMenuBar(true) }
    });
  }, [])

  return (
    <div id="menu-bar" className={`${styles.bottom_menu} ${isOpenMenuBar || styles.hide} `}>
     <ul>
       <Link href="tel: xxx-xxxx-xxxx"><a><li><FontAwesomeIcon icon={faPhone} size="2x" /></li></a></Link>
       <Link href="mailto: beauty-salon@example.com"><a><li><FontAwesomeIcon icon={faEnvelope} size="2x" /></li></a></Link>
       <Link href="https://line.me/R/"><a><li><FontAwesomeIcon icon={faLine} size="2x" /></li></a></Link>
     </ul>
    </div>
  )
}
