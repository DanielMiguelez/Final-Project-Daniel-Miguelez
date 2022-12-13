import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import {register} from '../../features/auth/authSlice'


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age:0,
  });

  const { name, email, password, age } = formData;
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData))
    
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={name} onChange={onChange} placeholder="name" />
      <input type="email" name="email" value={email} onChange={onChange} placeholder="email" />
      <input type="password" name="password"value={password}onChange={onChange} placeholder="password"/>
      <input type="number" name="age" value={age} onChange={onChange} placeholder="age" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
