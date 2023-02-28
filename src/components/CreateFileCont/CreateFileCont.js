import React, { useEffect, useState } from 'react'
import styles from './CreateFileCont.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const CreateFileCont = (props) => {
    const [editfile, seteditfile] = useState("")
    const [status, setstatus] = useState("")

    function handlechange(e){
      seteditfile(e.target.value)
      setstatus("...Saving")
    }

    function submithandler(){
        props.contfile("1")
        const url=`https://file-manager-backend-xymj.onrender.com/api/admin/updateContent/${props.foldname}/${props.filename}/${editfile}`
        axios.post(url)
        props.reload()

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
      const url=`https://file-manager-backend-xymj.onrender.com/api/admin/updateContent/${props.foldname}/${props.filename}/${editfile}`
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

    // const theme = 'snow';
    // const modules = {
    //   toolbar: [
    //     ['bold', 'italic', 'underline'],
    //   ],
    // };
    // const formats = ['bold', 'italic', 'underline'];
  
    // const { quill, quillRef } = useQuill({theme, modules, formats});
    // useEffect(() => {
    //   if (quill) {
    //     quill.on('text-change', (delta, oldDelta, source) => {
    //       handlechange(quill.getText())
    //       const result = quill.getContents()
    //       // console.log(quill.getContents())
    //       // console.log(result.Delta.ops[0].attributes);
    //     });
    //   }
    // }, [quill]);

  return (
    <div className={styles.editContainer}>
      <div className={styles.edit}>
        <div className={styles.header}>
          <p className={styles.headertext}>New File</p>
          <p className={styles.status}>{status}</p>
        </div>
        <div>
          <textarea onChange={handlechange} placeholder="Type anything here..." className={styles.input} type="text" name="" id=""/>
          {/* <div ref={quillRef}>{props.filecontents}</div> */}
        </div>
        <button onClick={submithandler} className={styles.btn}>Save File</button>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default CreateFileCont
