import React, { useEffect, useState } from 'react'
import styles from './Folder.module.css'

const Folder = (props) => {

  const [select, setselect] = useState()
  const [id, setid] = useState()
  

  function handleselect(e){
    setselect(e.target.innerText)
    setid(e.target.id)
    props.select(select)
    props.slctid(id)
  }

  // useEffect(()=>{
    
  // },[select,id])

  return (
    <button onClick={handleselect} id={props.id} className={styles.btn} style={{background:`${props.style}`}}><img className={styles.icon} src="folderIcon.png" alt=""/>{props.name}</button>
  )
}

export default Folder
