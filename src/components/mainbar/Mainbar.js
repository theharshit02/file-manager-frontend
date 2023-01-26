import React from 'react'
import styles from './Mainbar.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Mainbar = () => {
  return (
    <div className={styles.mainbar}>
        <div className={styles.header}>
            <div className={styles.hcontent}>
                <button className={styles.btn}><SettingsIcon className={styles.icon}/></button>
                <button className={styles.btn}><LogoutIcon className={styles.icon}/></button>
            </div>
        </div>   
        <p className={styles.line}></p>
    </div>
  )
}

export default Mainbar
