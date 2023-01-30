import React, { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../services/api'
import Card from './Card/Card'
import styles from './CardsContainer.module.css'


function CardsContainer(props) {

  const [loading,setLoading] = useState(true)
  const [data,setData]=useState([]) 
  
  useEffect(() => {
    setLoading(true)
    Promise.all(
      props.cities.map(city =>
        getCurrentWeather(city)
      )
    )
    .then(res=>{
      setData(res)
      
    })
    setLoading(false)
  }, [props.cities])
  
  return (
    <section className='container'>
      <h4>{props.title}</h4>
      <div className={styles.cardsBox}>
      {loading && <h5>Loading...</h5>}
      {!loading && data.map(d =>
        <Card key={d.location.name} location={d.location} current={d.current} /> 
        )
      }
      </div>
    </section>
  )
}

export default CardsContainer