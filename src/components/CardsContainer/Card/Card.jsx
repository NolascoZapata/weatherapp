import React from 'react'

function Card({location,current}) {
  return (
    <div>
      <img src={current.condition.icon} alt="" />
      <h3>{current.temp_c}°C</h3>
      <h4>{location.name}</h4>
      <p>{current.condition.text}</p>
      <p>Feels like:{current.feelslike_c}°C</p>
    </div>
  )
}

export default Card