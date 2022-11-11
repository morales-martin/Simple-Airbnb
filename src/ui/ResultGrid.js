import React from 'react'
import './Card.css'



export default function ResultGrid(props) {
  let results = props.results
  let noRepeats = new Set(results)
  let newArrWNorepets = [...noRepeats]
  console.log(props.days)
  return (
    <div className='contain'>
      {
    newArrWNorepets.map((result, index) => {
       return <div className="card" key={index}>
      <img className="card-img-top" src={result.images[0]} alt={result.id}></img>
      <p className='card-text listingName' >{result.title}</p>
      <p className='card-text'>{result.listingName}</p>
      <p className='card-text' ><span className='priceperNight'>{result.price}</span>/night &#8226; <span className='totalPrice'>${(props.days * (parseFloat(result.price.slice(1))))} Total</span> </p>
      <p className='card-text'>{result.beds} bed and {result.bathrooms} bathroom</p>
     </div>
})}
</div>
  )
}
