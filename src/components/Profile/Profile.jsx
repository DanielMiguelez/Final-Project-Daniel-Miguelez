import React from 'react'
import { useSelector } from 'react-redux'
import "./Profile.scss";

const Profile = () => {
    const {user} = useSelector (state => state.auth)
    if (!user ){
      return <p>cargando</p>
    }
  return (
    <div>
    <h1>Profile</h1>
    <div className='userfield'>
    <p>{user.user.name}</p>
    <p>{user.user.email}</p>
    <p>{user.user.age}</p>
    </div>
    </div>
  )
}

export default Profile