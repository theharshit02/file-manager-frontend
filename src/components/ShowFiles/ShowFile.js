import React from 'react'
import styles from './ShowFile.module.css'

const ShowFile = (props) => {
    function handleclick(e){
        props.fileopen(e.target.innerText)
        props.isslct("0")
        props.filecontents(props.content)
        props.fname(props.filename)
        props.id(props.index) 
    }
  return (
    <div onDoubleClick={handleclick} className={styles.logo}>
      <img src="filelogo.png" alt=""/>
      <p className={styles.name}>{props.filename}</p>
    </div>
  )
}

export default ShowFile
