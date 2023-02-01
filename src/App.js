import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Mainbar from './components/mainbar/Mainbar';
import Lock from './components/lock/Lock';
import Setpin from './components/setpin/Setpin';
import CreateFolder from './components/createFolder/CreateFolder';
import CreateFile from './components/CreateFile/CreateFile';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [pin, setpin] = useState("1")
  const [lock, setlock] = useState("1")
  const [fldr, setfldr] = useState("1")
  const [newfile, setnewfile] = useState("1")
  const [select, setselect] = useState("")
  console.log(select);

  async function callLock(){
    const url = "http://localhost:3000/api/admin/status"
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
  }

  function rmfile(e){
    setnewfile(e)
  }

  function handleselect(e){
    setselect(e)
  }

  console.log( localStorage.getItem("status") );
  useEffect(()=>{
    if(localStorage.getItem("status")!=="active"){
      callLock()
    } 
  },[])

  return (
    <div className="App">
      <div className="bars">
        <Sidebar logout={check} select={handleselect} filestatus={filestatus} fldrstatus={fldrstatus}/>
        <Mainbar newpin={change} logout={check} select={select}/>
      </div>
      {pin === "0"?<Setpin pins={change}/>:<></>}
      {lock === "0"?<Lock check={check}/>:<></>}
      {fldr === "0"?<CreateFolder rmfldr={rmfldr}/>:<></>}
      {newfile === "0"?<CreateFile rmfile={rmfile}/>:<></>}
    </div>
  );
}

export default App;
