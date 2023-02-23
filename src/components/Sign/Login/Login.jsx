import userEvent from "@testing-library/user-event";
import react from "react";
import { useRef, useState, useEffect } from 'react';
import './Login.css';
import { Link } from "react-router-dom";


const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };




  return (
    <>
      <div className="log_in">
        <h1 className="head">Welcome Back</h1>
        <form onSubmit={handleSubmit}>
          <div className="email">
            <label className="label">Email</label><br />
            <input className="input" type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="password">
            <label className="label">Password</label><br />
            <input className="input" type="password"
              name="password"
              value={form.password}
              onChange={handleChange}></input>
          </div>
          <button className="submit">Login</button>
          <div className='reg-link' style={{ padding: "15px", marginLeft: "-10px" }}>
            {/* <button className="btn"><Link className='link' to='/Register'>Register</Link></button> */}
          </div>
        </form>
      </div>
    </>

  )


}

export default Login