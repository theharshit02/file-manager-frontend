import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = (props) => {
  const [searched, setsearched] = useState([])
  const [keyword, setkeyword] = useState("")
  const [selected, setselected] = useState("")

  console.log(selected)

  async function handlechange(e){
    setkeyword(e.target.value)
  }

  function handelclick(e){
    setselected(e.target.innerText)
  }

  useEffect(()=>{
    async function autoselect(){
      const url = `https://file-manager-backend-xymj.onrender.com/api/admin/autoSelect/${selected}`
      const result = await axios.get(url)
      props.foldname(result.data.foldname)
      props.filename(result.data.filename)
      props.isslct("0")
      props.filecontents(result.data.filecontent)
    }
    autoselect()    
  },[selected])

  useEffect(()=>{
    async function retrieve(){
      if(keyword !== ""){
        const url = `https://file-manager-backend-xymj.onrender.com/api/admin/searchFiles/${keyword}`
        const result = await axios.get(url)
        setsearched(result.data)
      }
    }
    retrieve()
  },[keyword])

  return (
    <div className={styles.searchBar}>
        <div> 
            <input onChange={handlechange} className={styles.search} placeholder="Search files here" type="text" name="" id=""/>
        </div>

        {keyword !== ""?
          <div className={styles.suggestions}>
            {searched.map((files)=>(
              <div className={styles.searchResultDiv}>
                <p onClick={handelclick} className={styles.searchResult}><img className={styles.img} src="fileSearch.png" alt=""/>{files}</p>
              </div>
            ))}
          </div>
        :
          <></>
        }
         
    </div>
  )
}

export default SearchBar
