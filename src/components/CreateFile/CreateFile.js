import React, { useState } from 'react'
import styles from './CreateFile.module.css'

const CreateFile = (props) => {
    const [filename, setfilename] = useState("")
    function submithandler(){
        props.rmfile("1")
    }
  return (
    <div className={styles.fileContainer}>
      <div className={styles.file}>
        <p className={styles.header}>Create File</p>
        <div>
          <p className={styles.info}>Enter File name</p>
          <input onChange={(e)=>setfilename(e.target.value)} className={styles.input} type="text" name="" id=""/>
        </div>
        <button onClick={submithandler} className={styles.btn}>Create Now</button>
      </div>
    </div>
  )
}

export default CreateFile
