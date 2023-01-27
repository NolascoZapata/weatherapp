import React, { useEffect, useState } from 'react'
import Card from './Card/Card'
import styles from './CardsContainer.module.css'

import { getCurrentWeather } from '../../services/api'
import SearchBar from '../SearchBar/SearchBar'
import ListCities from '../ListCities/ListCities'



function CardsContainer() {
  
  const [loading,setLoading] = useState(true)
  const [data,setData]=useState([]) 
  const [searchResult,setSearchResult]=useState([]) 
  useEffect(() => {
    const cities= ['Madrid','Rome','Sydney','London','Athens','Paris','New York']
    
    setLoading(true)
    Promise.all(
      cities.map(city =>
        getCurrentWeather(city)
      )
    )
    .then(res=>{
      setData(res)
      return res
    })

    setLoading(false)
  }, [data])
  
  return (
    <div>
      <h2>CardsContainer</h2>
      <SearchBar setSearchResult={setSearchResult} />
      <ListCities searchResult={searchResult}/>
      <div className={styles.cardsBox}>
      {loading && <h5>Loading...</h5>}
      {!loading && 
      data.map(d =><Card key={d.location.name} location={d.location} current={d.current} /> 
      )}
      </div>
    </div>
  )
}

export default CardsContainer