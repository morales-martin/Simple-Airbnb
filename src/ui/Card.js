import React from 'react'


export default function Card(props) {
  let results = props.results
  return (
    results.map((result, index) => {
     return <div key={index}>
      <img src={result.images[0]} alt={result.id}></img>
      <p>{result.listingName}</p>
     </div>
})
  )
}
