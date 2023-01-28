import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Mainbar from './components/mainbar/Mainbar';
import Lock from './components/lock/Lock';
import Setpin from './components/setpin/Setpin';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  
  const [status, setstatus] = useState()

  async function callLock(){
    const url = "http://localhost:3000/api/admin/check"
    const result = await axios.get(url)
    if (result.data === 0){
      setstatus("0")
    }
  }

  console.log("status", status);

  useEffect(()=>{
    callLock()
  },[])

  return (
    <div className="App">
      <div className="bars">
        <Sidebar/>
        <Mainbar/>
      </div>
      {status === "0"?<Setpin/>:<Lock/>}
    </div>
  );
}

export default App;
