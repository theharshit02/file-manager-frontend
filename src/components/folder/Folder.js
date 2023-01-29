import React from 'react'
import styles from './Folder.module.css'
import FolderIcon from '@mui/icons-material/Folder';

const Folder = (props) => {
  return (
    <div className={styles.folder}>
      <p className={styles.name}><FolderIcon className={styles.icon}/>{props.name}</p>
    </div>
  )
}

export default Folder
