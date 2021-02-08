import styles from './index.module.scss';

export const Access = () => {
  return (
    <section id="access" className={styles.access}>
      <h2><b><i><u>Access</u></i></b></h2>
      <img src="last-view.jpg" alt=""/>
      <div className={styles.hours}>
        <h3>Hours</h3>
        <p>OPEN：AM10:00 / CLOSE：PM8:00</p>
      </div>
      <div id="contact" className={styles.contact}>
        <h3>Contact</h3>
        <ul>
          <li>PHONE：xxx-xxxx-xxxx</li>
          <li>E-MAIL：beauty@example.com</li>
          <li>LINE：beauty@example.com</li>
        </ul>
      </div>
      <div className={styles.address}>
        <h3>Address</h3>
        <img src="map.png" alt=""/>
        <p>大阪府大阪市阿倍野区阿倍野筋１丁目１−４３あべのハルカス 99F</p>
      </div>
    </section>
  )
}
