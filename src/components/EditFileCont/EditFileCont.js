import React, { useState } from 'react'
import styles from './EditFileCont.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditFileCont = (props) => {
    const [editfile, seteditfile] = useState("")

    async function submithandler(){
        props.closefile("1")
        const url=`http://localhost:3000/api/admin/updateContent/${props.foldname}/${props.fname}/${editfile}`
        axios.post(url)
        // axios.post(url)
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
  return (
    <div className={styles.editContainer}>
      <div className={styles.edit}>
        <p className={styles.header}>Edit File</p>
        <div>
          <textarea onChange={(e)=>seteditfile(e.target.value)} placeholder="Type anything here..." className={styles.input} type="text" name="" id="">{props.filecontents}</textarea>
        </div>
        <button onClick={submithandler} className={styles.btn}>Save File</button>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default EditFileCont
