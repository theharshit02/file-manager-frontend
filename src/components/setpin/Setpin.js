import React from 'react'
import styles from './Setpin.module.css'

const Setpin = () => {
  return (
    <div className={styles.setPinContainer}>
      <div className={styles.setpin}>
        <p className={styles.header}>Set Pin</p>
        <div>
          <p className={styles.info}>Enter New Pin</p>
          <input className={styles.input} type="password" name="" id="" maxLength={4}/>
        </div>
        <div>
          <p className={styles.info}>Confirm New Pin</p>
          <input className={styles.input} type="password" name="" id="" maxLength={4}/>
        </div>
        <button className={styles.btn}>Save Changes</button>
      </div>
    </div>
    
  )
}

export default Setpin
