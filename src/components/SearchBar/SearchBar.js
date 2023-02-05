import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [searched, setsearched] = useState([])
  const [keyword, setkeyword] = useState("")

  async function handlechange(e){
    setkeyword(e.target.value)
  }

  useEffect(()=>{
    async function retrieve(){
      if(keyword !== ""){
        const url = `http://localhost:3000/api/admin/searchFiles/${keyword}`
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
                <p onClick={(e)=>{console.log(e.target.innerText)}} className={styles.searchResult}><img className={styles.img} src="fileSearch.png" alt=""/>{files}</p>
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
