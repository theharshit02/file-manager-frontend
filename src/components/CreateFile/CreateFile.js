import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './CreateFile.module.css'

const CreateFile = (props) => {
    const [filename, setfilename] = useState("")
    function submithandler(){
        props.contfile("2")
        props.filename(filename)
        const url = `http://localhost:3000/api/admin/file/${props.foldname}?fname=${filename}`
        axios.post(url)
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
