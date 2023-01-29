import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Lock.module.css'

const Lock = (props) => {

  const [pin1, setpin1] = useState("")
  const [pin2, setpin2] = useState("")
  const [pin3, setpin3] = useState("")
  const [pin4, setpin4] = useState("")
  const [err, seterr] = useState(false)

  useEffect(()=>{
    document.body.style.overflowY = "hidden";
  })

  async function submithandler(){
    const pass = pin1+pin2+pin3+pin4
    const url = `http://localhost:3000/api/admin/checkPin/${pass}`
    const x = await axios.get(url)
    if(x.data === 0){
      props.check("1")
      seterr(false)
    }
    else{
      seterr(true)
    }
  }

  return (
    <div className={styles.lockContainer}>
      <div className={styles.lock}>
        <p className={styles.header} >Enter Account Pin</p>
        <div className={styles.inputPass}>
          <input onChange={(e)=>{setpin1(e.target.value)}} className={styles.pass} type="password" maxLength={1}/>
          <input onChange={(e)=>{setpin2(e.target.value)}} className={styles.pass} type="password" maxLength={1}/>
          <input onChange={(e)=>{setpin3(e.target.value)}} className={styles.pass} type="password" maxLength={1}/>
          <input onChange={(e)=>{setpin4(e.target.value)}} className={styles.pass} type="password" maxLength={1}/>
        </div>
        {err && <p className={styles.error}>* Wrong PIN</p>}
        <button onClick={submithandler} className={styles.btn}>Enter</button>
      </div>
    </div>
    
  )
}

export default Lock
