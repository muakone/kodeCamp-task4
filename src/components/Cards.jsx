import React from 'react'

const Cards = ({user, index, showDetails, code}) => {
    const showDetailsHandler = () => {
        showDetails(code)
      }
  return (
    <div key={index} className='card' onClick={showDetailsHandler}>
    <div className='card-title'>
      <h2>{user.name}</h2>
    </div>
    
    <div className='info-container'>
        <h3>General Info</h3>
        <div className='card-body'>
        <div className='card-info'>
            <h4>User Name:</h4>
            <p>{user.username}</p>
        </div>
        <div className="card-info">
            <h4>Address:</h4>
            <p>{user.address.suite}, {user.address.street}, {user.address.city}</p>
        </div>
        <div className="card-info">
            <h4>Email:</h4>
            <p>{user.email}</p>
        </div>
        <div className="card-info">
            <h4>Phone:</h4>
            <p>{user.phone}</p>
        </div>
        </div>
    </div>
  </div>
  )
}

export default Cards