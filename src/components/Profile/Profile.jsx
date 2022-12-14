import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const {user} = useSelector (state => state.auth)
  return (
    <div>Profile {console.log(user) }</div>
  )
}

export default Profile