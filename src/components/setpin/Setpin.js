import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Setpin.module.css'

const Setpin = (props) => {
  const [newpass, setnewpass] = useState("")
  const [confirmpass, setconfirmpass] = useState("")
  const [same, setsame] = useState(false)
  console.log(newpass);

  async function submithandler(){
    if(newpass === confirmpass){
      setsame(false)
      const url = `https://file-manager-backend-xymj.onrender.com/api/admin/setPin/${newpass}`
      axios.post(url)
      props.pins(1)
      localStorage.setItem("status", "active")
    }
    else{
      setsame(true)
    }
  }

  useEffect(()=>{
    document.body.style.overflowY="hidden"
    return()=>{
      document.body.style.overflowY="scroll"
    }
  },[])

  return (
    <div className={styles.setPinContainer}>
      <div className={styles.setpin}>
        <p className={styles.header}>Set Pin</p>
        <div>
          <p className={styles.info}>Enter New Pin</p>
          <input onChange={(e)=>setnewpass(e.target.value)} className={styles.input} type="password" name="" id="" maxLength={4}/>
        </div>
        <div>
          <p className={styles.info}>Confirm New Pin</p>
          <input onChange={(e)=>setconfirmpass(e.target.value)} className={styles.input} type="password" name="" id="" maxLength={4}/>
          {same && <p className={styles.error}>* Enter same PIN</p> }
        </div>
        <button onClick={submithandler} className={styles.btn}>Save Changes</button>
      </div>
    </div>
    
  )
}

export default Setpin
