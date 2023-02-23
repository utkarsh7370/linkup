import React from 'react'
import './Register.css'
import { useState } from "react";
import { Link } from 'react-router-dom';
import Login from '../Login/Login';
import regi from "../regi.jpg";



const Register = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name: "",
        confirmpassword: "",
        contanct: "",
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
            <div className="register_container">
                <section>
                    <div className="left-data" style={{ width: "100%" }}>
                        <div className="sign_img">
                            <img src={regi} style={{ maxWidth: 400 }} alt="" />
                        </div>
                    </div>
                    <div className="right-data-container">
                        <div className="app-wrapper">
                            <div className='heading'>
                                <h1 className="title">Sign Up</h1>

                                <h2 className="titles">
                                    <Link className='link' to='/Login'>Log In</Link></h2>

                            </div>

                            <form className='form-wrapper' onSubmit={handleSubmit}>
                                <div className="name">
                                    <label className="label">Full Name</label><br />
                                    <input className="input"
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}></input>
                                </div>
                                <div className="email">
                                    <label className="label">Email</label><br />
                                    <input className="input"
                                        type="email"
                                        placeholder=""
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}></input>
                                </div>
                                <div className="contanct">
                                    <label className="label">Contanct</label><br />
                                    <input className="input"
                                        type="number"
                                        placeholder=""
                                        value={form.contanct}
                                        onChange={handleChange}></input>

                                </div>
                                <div className="password">
                                    <label className="label">Password</label><br />
                                    <input className="input"
                                        type="password"
                                        placeholder=""
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}></input>
                                </div>
                                <div className="confirm-password">
                                    <label className="label">Confirm Password</label><br />
                                    <input className="input"
                                        type="password"
                                        placeholder=""
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}></input>
                                </div>
                                <button className="btn" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}

export default Register