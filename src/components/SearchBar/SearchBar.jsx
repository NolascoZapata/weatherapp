import React from 'react'
import { getSearchCity } from '../../services/api'

function SearchBar({setSearchResult}) {
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const resultArray = await getSearchCity(document.getElementById('search').value)
    if (resultArray.length>1) setSearchResult(resultArray)
  }

  // const handleSearchChange = (e)=>{
  //   if (e.target.value){
  //   const resultArray = getSearchCity(e.target.value)
  //   if (resultArray.length>1)setSearchResult(resultArray)
  //   }
  // }

  return (
    <div>
      <h3>SearchBar</h3>
      <form className='search' onSubmit={handleSubmit}>
        <input className='search-input' id='search' type="text"
        />
      <button className='search-button'>Search</button>
      </form>
      </div>
  )
}

export default SearchBar