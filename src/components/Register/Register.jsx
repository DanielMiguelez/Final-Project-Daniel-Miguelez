import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../features/auth/authSlice";
import {notification} from "antd";


const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    age: 0,
  });

  const { name, email, password, password2, age } = formData;
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    }else{
      dispatch(register(formData))
      return notification.success({
        message:"Welcome",
        description:"Welcome"
      })
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        placeholder="name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="password"
      />
      <input
        type="password2"
        name="password2"
        value={password2}
        onChange={onChange}
        placeholder="Confirm your password"
      />
      <input
        type="number"
        name="age"
        value={age}
        onChange={onChange}
        placeholder="age"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
