import axios from "axios"

async function listfolder(){
    const url = `http://localhost:3000/api/admin/listFolder`
    const result = await axios.get(url)

    return result.data
    // console.log(result.data)
    // setfolders(result.data)
  }

  export {listfolder}