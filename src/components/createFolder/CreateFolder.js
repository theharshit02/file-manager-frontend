import React, { useState } from 'react'
import styles from './CreateFolder.module.css'
import axios from 'axios'

const CreateFolder = (props) => {
  
  const [newfolder, setnewfolder] = useState("")
  
  function submithandler(){
    const url = `http://localhost:3000/api/admin/folderName/${newfolder}`
    axios.post(url)
    props.rmfldr("1")
  }
  return (
    <div className={styles.folderContainer}>
      <div className={styles.folder}>
        <p className={styles.header}>Create Folder</p>
        <div>
          <p className={styles.info}>Enter folder name</p>
          <input onChange={(e)=>setnewfolder(e.target.value)} className={styles.input} type="text" name="" id=""/>
        </div>
        <button onClick={submithandler} className={styles.btn}>Create Now</button>
      </div>
    </div>
  )
}

export default CreateFolder
