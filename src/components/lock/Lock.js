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
    document.body.style.overflowY="hidden"
    return()=>{
      document.body.style.overflowY="scroll"
    }
  },[])

  function handlechange1(e){
    setpin1(e.target.value)
    const next = document.getElementById("2")
    next.focus()
  }

  function handlechange2(e){
    setpin2(e.target.value)
    const next = document.getElementById("3")
    next.focus()
  }

  function handlechange3(e){
    setpin3(e.target.value)
    const next = document.getElementById("4")
    next.focus()
  }

  function handlechange4(e){
    setpin4(e.target.value)
  }

  async function submithandler(){
    const pass = pin1+pin2+pin3+pin4
    const url = `https://file-manager-backend-xymj.onrender.com/api/admin/checkPin/${pass}`
    const x = await axios.get(url)
    if(x.data === 0){
      props.check("1")
      seterr(false)
      localStorage.setItem("status", "active")
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
          <input id="1" onChange={handlechange1} className={styles.pass} type="password" maxLength={1}/>
          <input id="2" onChange={handlechange2} className={styles.pass} type="password" maxLength={1}/>
          <input id="3" onChange={handlechange3} className={styles.pass} type="password" maxLength={1}/>
          <input id="4" onChange={handlechange4} className={styles.pass} type="password" maxLength={1}/>
        </div>
        {err && <p className={styles.error}>* Wrong PIN</p>}
        <button onClick={submithandler} className={styles.btn}>Enter</button>
      </div>
    </div>
    
  )
}

export default Lock
