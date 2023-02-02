import React, { useState } from 'react'
import styles from './CreateFileCont.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateFileCont = (props) => {
    const [editfile, seteditfile] = useState("")
    console.log(props.filename);

    function submithandler(){
        props.contfile("1")
        const url=`http://localhost:3000/api/admin/file/${props.foldname}?fname=${props.filename}&fcontent=${editfile}`
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
  return (
    <div className={styles.editContainer}>
      <div className={styles.edit}>
        <p className={styles.header}>New File</p>
        <div>
          <textarea onChange={(e)=>seteditfile(e.target.value)} placeholder="Type anything here..." className={styles.input} type="text" name="" id=""/>
        </div>
        <button onClick={submithandler} className={styles.btn}>Save File</button>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default CreateFileCont
