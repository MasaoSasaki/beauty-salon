import styles from './index.module.scss';

export const Staff = () => {
  return (
    <section id="staff" className={styles.staff}>
      <h2><b><i><u>STAFF</u></i></b></h2>
      <ul>
        <li>
          <img src="staff1.png" alt="" />
          <div>
            <p>name</p>
            <p>message</p>
          </div>
        </li>
        <li>
          <img src="staff2.png" alt="" />
          <div>
            <p>name</p>
            <p>message</p>
          </div>
        </li>
        <li>
          <img src="staff3.png" alt="" />
          <div>
            <p>name</p>
            <p>message</p>
          </div>
        </li>
      </ul>
    </section>
  )
}