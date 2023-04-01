import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

function Login() {
    return (
        <div className='sign w-100'>
            <div className="Auth-form-container d-flex justify-content-end align-items-center">
                <img src='https://www.eurocommerce.eu/app/uploads/2022/08/Cover-E-Commerce-FULL.png' className='w-100 h-100' />
                <div className='signin position-absolute  w-100 d-flex justify-content-evenly '>
                    <div className='info'>
                        <h3 className='display-6 fw-bolder mb-0 card-title h5'>The best e-commerce website</h3>
                        <p className=''>Login now to the best e-commerce site in Palestine</p>
                    </div>
                    <form className="Auth-form bg-white">
                        <div className="Auth-form-content">
                            <h3 className="Auth-form-title text-align-center">Sign In</h3>
                            <div className="form-group mt-3">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <Link to="/" className="btn btn-outline-dark">
                                    login
                                </Link>
                            </div>
                            <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;