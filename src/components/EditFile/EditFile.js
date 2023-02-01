import React, { useState } from 'react'
import styles from './EditFile.module.css'

const EditFile = (props) => {
    const [editfile, seteditfile] = useState("")

    function submithandler(){
        props.rmfile("1")
    }
  return (
    <div className={styles.editContainer}>
      <div className={styles.edit}>
        <p className={styles.header}>Edit File</p>
        <div>
          <textarea onChange={(e)=>seteditfile(e.target.value)} placeholder="Type anything here..." className={styles.input} type="text" name="" id=""/>
        </div>
        <button onClick={submithandler} className={styles.btn}>Save File</button>
      </div>
    </div>
  )
}

export default EditFile
