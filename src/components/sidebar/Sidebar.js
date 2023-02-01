import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import Folder from '../folder/Folder';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import LockIcon from '@mui/icons-material/Lock';
import axios from 'axios';

const Sidebar = (props) => {

  const [folders, setfolders ] = useState([])
  const [active, setactive] = useState()

  // console.log(typeof(active));

  function clickhandler(){
    props.fldrstatus("0")
  }

  async function listfolder(){
    const url = `http://localhost:3000/api/admin/listFolder`
    const result = await axios.get(url)
    setfolders(result.data)
  }

  function handleselected(e){
    props.select(e)
  }

  function handleactive(e){
    setactive(e)
  }

  function handleLockBtn(){
    props.logout("0")
    localStorage.setItem("status", "inactive")
  }

  useEffect(()=>{
    listfolder()
  })

  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} src="logo.png" alt="Logo"/>
      <div className={styles.buttons}>
        <button className={styles.btn}><NoteAddIcon className={styles.icon}/>Add File</button>
        <button onClick={clickhandler} className={styles.btn}><CreateNewFolderIcon className={styles.icon}/>Add Folder</button>
      </div>
      <div className={styles.folders}>
        {folders.map((list, index)=>(
          //eslint-disable-next-line
          <Folder id={index} select={handleselected} style={active==index?"#cfd4da":"#EBF0F5"} slctid={handleactive} name={list.name}/>
        ))}
      </div>
      <button onClick={handleLockBtn} className={styles.lock}><LockIcon className={styles.icon}/>Lock now</button>
    </div>
  )
}

export default Sidebar
