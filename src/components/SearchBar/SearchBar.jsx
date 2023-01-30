import React from 'react'
import { getSearchCity } from '../../services/api'
import './SearchBar.css'






function SearchBar(props) {
  const {setCities,setTitle} = props
  const handleSubmit = async (e)=>{
    const searchInput = document.getElementById('searchInput')
    e.preventDefault()
    const resultArray = await getSearchCity(searchInput.value)
    if (resultArray.length>0){
      let cities=[]
      for (let i = 0; i < resultArray.length; i++) {
        cities.push(resultArray[i].name)
        
      }
      setCities(cities)
      setTitle(`Results of "${searchInput.value}"`)
    }
  }



  return (
    <form className='search' onSubmit={handleSubmit}>
      <input className='search-input' id='searchInput' type='text'  placeholder='Search' required/>
      <button className='search-button' id='searchBtn'><i className='material-icons'>arrow_forward</i></button>
    </form>

  )
}

export default SearchBar