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
  const [filecont, setfilecont] = useState("")
  const select = props.select
  const reload = props.reload

  function handlefilecont(e){
    setfilecont(e)
  }

  useEffect(()=>{
    props.filecontents(filecont)
  },[filecont])

  function handleLogOut(){
    props.logout("0")
    localStorage.removeItem("status")
  }

  useEffect(()=>{
    async function files(){
      const url = `https://file-manager-backend-xymj.onrender.com/api/admin/getFiles/${props.select}`
      const result = await axios.get(url)
      setsavedfiles(result.data[0].files)
    }
    files()
  },[select, reload])

  return (
    <div className={styles.mainbar}>
        <div className={styles.header}>
            <div className={styles.hcontent}>
                <button onClick={()=>props.newpin("0")} className={styles.btn}><SettingsIcon className={styles.icon}/></button>
                <button onClick={handleLogOut} className={styles.btn}><LogoutIcon className={styles.icon}/></button>
            </div>
        </div>
        <div className={styles.search}>
          <SearchBar foldname={(e)=>props.srchfoldname(e)} filename={(e)=>props.srchfilename(e)} isslct={(e)=>{props.isslct(e)}} filecontents={(e)=>props.filecontents(e)} />
        </div>
        
        <div className={styles.breadcrumb}>
          <p>{props.select} / {slctfile}</p> 
        </div>
        <p className={styles.line}></p>
        <div className={styles.files}>
          {savedfiles.map((list, index)=>(
            <ShowFile index={index} fname={(e)=>{props.fname(e)}} filecontents={handlefilecont} isslct={(e)=>{props.isslct(e)}} fileopen={(e)=>{setslctfile(e)}} filename={list.fname} content={list.fcontent}/>
          ))}
        </div>
        
    </div>
  )
}

export default Mainbar
