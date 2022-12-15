import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector (state => state.auth)
  const [text, setText] = useState("")
  
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter"){
      console.log(text);
    }
  };
  const onLogout = () =>{
    dispatch(logout())
    setTimeout(() => {
      navigate("/login")
    }, 3000);
  }

  return (
    <div className='header'>
      <span><Link to="/">Home</Link></span>
       <input onKeyUp={handleChange} placeholder="search post" name='text'/>
      {user ? (
        <>
        <Link to="/profile">Profile</Link>
        <Link to="/" onClick={onLogout}>Logout</Link>
        </>

      ) : (

        <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default Header