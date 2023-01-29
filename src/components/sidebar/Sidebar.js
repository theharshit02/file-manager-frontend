import React from 'react'
import styles from './Sidebar.module.css'
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import LockIcon from '@mui/icons-material/Lock';

const Sidebar = (props) => {

  function clickhandler(){
    props.fldrstatus("0")
  }
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src="logo.png" alt="Logo"/>
      <div className={styles.buttons}>
        <button className={styles.btn}><NoteAddIcon className={styles.icon}/>Add File</button>
        <button onClick={clickhandler} className={styles.btn}><CreateNewFolderIcon className={styles.icon}/>Add Folder</button>
      </div>
      <button className={styles.lock}><LockIcon className={styles.icon}/>Lock now</button>
    </div>
  )
}

export default Sidebar
