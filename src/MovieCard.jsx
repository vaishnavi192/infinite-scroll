import React from 'react'


const MovieCard = ({myData}) => {
//ham ek naya const banaenge to get specific functions of myDataso that we don't have to use myData.title, 
// myData.body, or myData.id. This is known as object destructuring
const { title, body, id } = myData;
  return (
    <div className="card">
        <p>{id}</p>
        <p>{body.substr(0,150)}</p>
        <h2>{title.substr(0,150)}</h2> 
      
    </div>
  )
}

export default MovieCard
