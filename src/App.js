import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Mainbar from './components/mainbar/Mainbar';
import Lock from './components/lock/Lock';
import Setpin from './components/setpin/Setpin';
import CreateFolder from './components/createFolder/CreateFolder';
import CreateFile from './components/CreateFile/CreateFile';
import CreateFileCont from './components/CreateFileCont/CreateFileCont';
import EditFileCont from './components/EditFileCont/EditFileCont';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {listfolder} from './components/Api/api'

function App() {
  
  const [pin, setpin] = useState("1")
  const [lock, setlock] = useState("1")
  const [fldr, setfldr] = useState("1")
  const [newfile, setnewfile] = useState("1")
  const [select, setselect] = useState("")
  const [fname, setfname] = useState("")
  const [editfname, seteditfname] = useState("")
  const [filecontents, setfilecontents] = useState("")
  const [edit, setedit] = useState("1")
  const [editid, seteditid] = useState()
  const [reload, setreload] = useState(true)

  async function callLock(){
    const url = "https://file-manager-backend-xymj.onrender.com/api/admin/status"
    const result = await axios.get(url)
    if (result.data === 0){
      setpin("0")
    }
    else{
      setlock("0")
    }
  }

  function change(e){
    setpin(e)
  }

  function check(e){
    setlock(e)
  }

  function fldrstatus(e){
    setfldr(e)
  }

  function filestatus(e){
    setnewfile(e)
  }

  function rmfldr(e){
    setfldr(e)
    listfolder()
  }

  function contfile(e){
    setnewfile(e)
  }

  function handleselect(e){
    setselect(e)
  }

  function filename(e){
    setfname(e)
  }

  useEffect(()=>{
    if(localStorage.getItem("status")!=="active"){
      callLock()
    } 
  },[])

  return (
    <div className="App">
      <div className="bars">
        <Sidebar logout={check} select={handleselect} filestatus={filestatus} reload={reload} fldrstatus={fldrstatus}/>
        <Mainbar fname={(e)=>{seteditfname(e)}} filecontents={(e)=>{setfilecontents(e)}} isslct={(e)=>{setedit(e)}} id={(e)=>seteditid(e)} newpin={change} logout={check} select={select} reload={reload} srchfoldname={(e)=>handleselect(e)} srchfilename={(e)=>seteditfname(e)} />
      </div>
      {pin === "0"?<Setpin pins={change}/>:<></>}
      {lock === "0"?<Lock check={check}/>:<></>}
      {fldr === "0"?<CreateFolder reload={(e)=>setreload(!reload)} rmfldr={rmfldr}/>:<></>}
      {newfile === "0"?<CreateFile filename={filename} foldname={select} contfile={contfile}/>:newfile==="2"?<CreateFileCont reload={(e)=>setreload(!reload)} foldname={select} filename={fname} contfile={contfile}/>:<></>}
      {edit === "0"?<EditFileCont reload={(e)=>setreload(!reload)} id={editid} closefile={(e)=>{setedit(e)}} fname={editfname} foldname={select} filecontents={filecontents}/>:<></>}
    </div>
  );
}

export default App;
