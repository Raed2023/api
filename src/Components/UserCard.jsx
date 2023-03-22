import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div>
        <h1>User Name :{user.name}</h1>
        <h2>City: {user.address.city}</h2>
        <h4>Email: {user.email}</h4>
       <Link to={`/info/${user.id}`}>
       <Button variant="info">Info</Button>
       </Link>
        <hr />
    </div>
  )
}

export default UserCard