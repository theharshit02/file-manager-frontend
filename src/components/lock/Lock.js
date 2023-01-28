import React, { useEffect } from 'react'
import styles from './Lock.module.css'

const Lock = () => {

  useEffect(()=>{
    document.body.style.overflowY = "hidden";
  })

  return (
    <div className={styles.lockContainer}>
      <div className={styles.lock}>
        <p className={styles.header} >Enter Account Pin</p>
        <div className={styles.inputPass}>
          <input className={styles.pass} type="password" maxLength={1}/>
          <input className={styles.pass} type="password" maxLength={1}/>
          <input className={styles.pass} type="password" maxLength={1}/>
          <input className={styles.pass} type="password" maxLength={1}/>
        </div>
        <button className={styles.btn}>Enter</button>
      </div>
    </div>
    
  )
}

export default Lock
