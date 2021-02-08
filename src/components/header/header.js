import { useState, useEffect } from 'react';
import styles from './header.module.scss';
export const Header = () => {
  const [isOpenDrawer, setDrawerState] = useState(false)
  const [isHamburger, setHamburgerColor] = useState(false)
  const drawerFunction = () => {
    setDrawerState(!isOpenDrawer)
  }
  const scrollWindow = (elem) => {
    var element = document.getElementById(elem);
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top + window.pageYOffset;
    document.documentElement.scrollTo({top: elemTop, behavior: 'smooth'});
  }
  useEffect(() => {
    addEventListener('scroll', () => {
      setHamburgerColor(true);
      if (pageYOffset === 0) setHamburgerColor(false);
    })
  }, []);
  return (
    <header className={styles.header}>
      <h1>Beauty Salon</h1>
      <div className={`${styles.hamburger} ${isHamburger && styles.gray}`} onClick={() => drawerFunction()}>
        <span className={`${styles.bar1} ${isOpenDrawer && styles.open}`}></span>
        <span className={`${styles.bar2} ${isOpenDrawer && styles.open}`}></span>
        <span className={`${styles.bar3} ${isOpenDrawer && styles.open}`}></span>
      </div>
      <div className={`${styles.drawerMenu} ${isOpenDrawer && styles.open}`} onClick={() => setDrawerState(!isOpenDrawer)}>
        <h2>Site Menu</h2>
        <ul>
          <li><span onClick={() => scrollWindow('first-view')}>INTRODUCTION</span></li>
          <li><span onClick={() => scrollWindow('menus')}>MENUS</span></li>
          <li><span onClick={() => scrollWindow('staff')}>STAFF</span></li>
          <li><span onClick={() => scrollWindow('access')}>ACCESS</span></li>
          <li><span onClick={() => scrollWindow('contact')}>CONTACT</span></li>
        </ul>
        <p onClick={() => drawerFunction()}><u>閉じる</u></p>
      </div>
    </header>
  )
}
