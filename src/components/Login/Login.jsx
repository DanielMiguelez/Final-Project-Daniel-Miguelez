import { notification } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import "./Login.scss";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate()
  const { isError, message, isSuccess } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "error",
        description: message,
      });
    }
    if (isSuccess) {
      notification.success({ message: "Success", description: message });
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    }
    dispatch(reset())
  }, [isError, message, isSuccess]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    console.log("formData", formData);
  };

  return (
    <div>
    <form onSubmit={onSubmit}>
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
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
