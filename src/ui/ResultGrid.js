import React from 'react'
import './Card.css'


export default function ResultGrid(props) {
  let results = props.results
  let noRepeats = new Set(results)
  let newArrWNorepets = [...noRepeats]
  return (
    <div className='contain'>
      {
    newArrWNorepets.map((result, index) => {
       return <div className="card" style={{width: '18rem'}} key={index}>
      <img className="card-img-top" src={result.images[0]} alt={result.id}></img>
      <p className='card-text' >{result.listingName}</p>
     </div>
})}
</div>
  )
}
