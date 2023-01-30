import './Card.css'

function Card({location,current}) {
  return (
    <>
    <div className="card">
        <div>
          <img src={current.condition.icon} alt=''/>
          <p className='card-title'>{current.temp_c}°C</p>
        </div>
        <div className='card-content'>
          <h5>{location.name}</h5>
          <p>{location.country}</p>
        </div>
      </div>
    </>
    
  )
}

export default Card