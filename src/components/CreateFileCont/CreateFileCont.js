import React, { useEffect, useState } from 'react'
import styles from './CreateFileCont.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateFileCont = (props) => {
    const [editfile, seteditfile] = useState("")
    const [status, setstatus] = useState("")
    console.log(status)

    function handlechange(e){
      seteditfile(e.target.value)
      setstatus("...Saving")
    }

    function submithandler(){
        props.contfile("1")
        const url=`http://localhost:3000/api/admin/updateContent/${props.foldname}/${props.filename}/${editfile}`
        axios.post(url)

        // toast.success('🦄 Wow so easy!', {
        //   position: "top-right",
        //   autoClose: 2000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        //   });
    }

    function write(){
      const url=`http://localhost:3000/api/admin/updateContent/${props.foldname}/${props.filename}/${editfile}`
      axios.post(url)
    }

    useEffect(()=>{
      const fetch = setTimeout(() => {
        write()
        setstatus("Saved")
      }, 2000);

      return () => {
        clearTimeout(fetch)
      }
    },[editfile])

  return (
    <div className={styles.editContainer}>
      <div className={styles.edit}>
        <div className={styles.header}>
          <p className={styles.headertext}>New File</p>
          <p className={styles.status}>{status}</p>
        </div>
        <div>
          <textarea onChange={handlechange} placeholder="Type anything here..." className={styles.input} type="text" name="" id=""/>
        </div>
        <button onClick={submithandler} className={styles.btn}>Save File</button>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default CreateFileCont
