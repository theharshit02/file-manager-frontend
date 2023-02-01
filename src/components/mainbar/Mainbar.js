import React from 'react'
import styles from './Mainbar.module.css'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Mainbar = (props) => {
  function handleLogOut(){
    props.logout("0")
    localStorage.removeItem("status")
  }
  return (
    <div className={styles.mainbar}>
        <div className={styles.header}>
            <div className={styles.hcontent}>
                <button onClick={()=>props.newpin("0")} className={styles.btn}><SettingsIcon className={styles.icon}/></button>
                <button onClick={handleLogOut} className={styles.btn}><LogoutIcon className={styles.icon}/></button>
            </div>
        </div>
        <div className={styles.breadcrumb}>
          <p>{props.select}/</p> 
        </div>
        <p className={styles.line}></p>
    </div>
  )
}

export default Mainbar
