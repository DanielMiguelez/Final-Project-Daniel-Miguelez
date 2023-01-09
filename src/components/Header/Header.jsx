import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../features/auth/authSlice'
import "./Header.scss";
import {
  HomeOutlined,
  TeamOutlined,
  UsergroupDeleteOutlined,
  UserAddOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {user} = useSelector (state => state.auth)
  const [text, setText] = useState("")

  
  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter"){
      navigate("/search/"+text)
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
      <span><Link to="/"><HomeOutlined /> DANIELGRAM </Link></span>
       <input onKeyUp={handleChange} placeholder="search post" name='text'/>
       {user?.user?.role === 'admin' ? <span><Link to="/admin"> <UserOutlined /> Admin</Link></span>:''}
      {user ? (
        <>
         <Link to="/createPost"> <TeamOutlined /> Publish</Link>
        <Link to="/profile"> <TeamOutlined /> Profile</Link>
        <Link to="/" onClick={onLogout}><UsergroupDeleteOutlined /> Logout</Link>
        </>

      ) : (

        <>
        <Link to="/login"> Login</Link>
        <Link to="/register"> <UserAddOutlined /> Register</Link>
        </>
      )}
    </div>
  );
};

export default Header