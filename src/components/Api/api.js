import axios from "axios"

async function listfolder(){
    const url = `https://file-manager-backend-xymj.onrender.com/api/admin/listFolder`
    const result = await axios.get(url)

    return result.data
    // console.log(result.data)
    // setfolders(result.data)
  }

  export {listfolder}


  //trying differently