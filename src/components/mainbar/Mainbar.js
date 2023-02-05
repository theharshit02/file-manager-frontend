import React, { useEffect, useState } from 'react'
import styles from './Mainbar.module.css'
import ShowFile from '../ShowFiles/ShowFile';
import SearchBar from '../SearchBar/SearchBar';
import axios from 'axios';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Mainbar = (props) => {

  const [savedfiles, setsavedfiles] = useState([])
  const [slctfile, setslctfile] = useState("")

  function handleLogOut(){
    props.logout("0")
    localStorage.removeItem("status")
  }

  useEffect(()=>{
    async function files(){
      const url = `http://localhost:3000/api/admin/getFiles/${props.select}`
      const result = await axios.get(url)
      setsavedfiles(result.data[0].files)
    }
    files()
  },[props.select])

  return (
    <div className={styles.mainbar}>
        <div className={styles.header}>
            <div className={styles.hcontent}>
                <button onClick={()=>props.newpin("0")} className={styles.btn}><SettingsIcon className={styles.icon}/></button>
                <button onClick={handleLogOut} className={styles.btn}><LogoutIcon className={styles.icon}/></button>
            </div>
        </div>
        <div className={styles.search}>
          <SearchBar/>
        </div>
        
        <div className={styles.breadcrumb}>
          <p>{props.select} / {slctfile}</p> 
        </div>
        <p className={styles.line}></p>
        <div className={styles.files}>
          {savedfiles.map((list, index)=>(
            <ShowFile index={index} fname={(e)=>{props.fname(e)}} filecontents={(e)=>{props.filecontents(e)}} isslct={(e)=>{props.isslct(e)}} fileopen={(e)=>{setslctfile(e)}} filename={list.fname} content={list.fcontent}/>
          ))}
        </div>
        
    </div>
  )
}

export default Mainbar
