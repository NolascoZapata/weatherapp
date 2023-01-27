import React from 'react'
import City from './City/City'

function ListCities({searchResults}) {
  const results = searchResults.map(city=><City key={city.id} city={city}/>)
  const content = results?.lenght? results : <li><p>No matching city</p></li>
  return (
    <ul>
      {content}
    </ul>
  )
}

export default ListCities