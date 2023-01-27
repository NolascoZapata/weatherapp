import React from 'react'

function City({city}) {
  return (
    <li>
      <p>{city.name}</p>
      <p>{city.region}</p>
    </li>
    
  )
}

export default City