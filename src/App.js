import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Mainbar from './components/mainbar/Mainbar';
import Lock from './components/lock/Lock';
import Setpin from './components/setpin/Setpin';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [pin, setpin] = useState("1")
  const [lock, setlock] = useState("1")  

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

  console.log("status", pin);

  useEffect(()=>{
    callLock()
  },[])

  return (
    <div className="App">
      <div className="bars">
        <Sidebar/>
        <Mainbar/>
      </div>
      {pin === "0"?<Setpin pins={change}/>:<></>}
      {lock === "0"?<Lock check={check}/>:<></>}
    </div>
  );
}

export default App;
