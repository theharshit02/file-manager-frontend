import axios from "axios"

async function listfolder(){
    const url = `https://file-manager-backend-xymj.onrender.com/api/admin/listFolder`
    const result = await axios.get(url)

    return result.data
  }

  export {listfolder}


  //trying differently