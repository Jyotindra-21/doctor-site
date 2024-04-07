import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Register() {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState([])
    const [isDisable, setIsDisable] = useState(false)
    const [isDisableEmail, setIsDisableEmail] = useState(false)

    const handleSignup = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("id", new Date().getTime().toString())
        for (const [key, value] of formData.entries()) {
            if (value.trim() === "") {
                toast.error(`${key} field require.`)
                return
            }
        }
        const newUser = Object.fromEntries(formData)
        const res = await axios.post("http://localhost:3000/admin", newUser);

        if (res.status === 201) {
            toast.success("Register successfully !!")
            navigate('/admin')
        }

    }

    const handleOnchangeUsername = async (e) => {
        if (e.target.value.trim() !== "") {
            const res = await axios.get(`http://localhost:3000/admin?username=${e.target.value}`)
            if (res.data.length > 0) {
                setIsDisable(true)
                return
            } else {
                setIsDisable(false)
            }
        }
    }
    const handleOnchangeEmail = async (e) => {
        if (e.target.value.trim() !== "") {
            const res = await axios.get(`http://localhost:3000/admin?email=${e.target.value}`)
            if (res.data.length > 0) {
                setIsDisableEmail(true)
                return
            } else {
                setIsDisableEmail(false)
            }
        }
    }
    const getAdmin = () => {
        const loggedAdmin = localStorage.getItem("admin")
        if (loggedAdmin !== null) {
            setAdmin(() => JSON.parse(loggedAdmin))
            return;
        }
        navigate("/")
    }
    useEffect(() => {
        getAdmin()
    }, [])
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                <div className="brand-logo">
                                    <img src="../src/admin/admin_assets/images/logo-dark.svg" alt="logo" />
                                </div>
                                <h4>New here?</h4>
                                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                                <form className="pt-3" method='post' onSubmit={handleSignup}>
                                    <div className="form-group">
                                        <input type="email" name='email' onChange={handleOnchangeEmail} className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                                        {isDisableEmail && <small style={{ color: "red" }}>Email already exist.</small>}

                                    </div>
                                    <div className="form-group">
                                        <input type="text" name='username' onChange={handleOnchangeUsername} className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                                        {isDisable && <small style={{ color: "red" }}>Username already exist.</small>}

                                    </div>
                                    <div className="form-group">
                                        <select name='status' className='form-control form-control-lg'>
                                            <option >--- Admin Type ---</option>
                                            <option value={1}>Administrator</option>
                                            <option value={0}>Admin</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name='password' className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="url" name='img' className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Profile URL" />
                                    </div>
                                    <div className="mb-4">
                                        <div className="form-check">
                                            <label className="form-check-label text-muted">
                                                <input type="checkbox" className="form-check-input" />
                                                I agree to all Terms &amp; Conditions
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <button disabled={isDisable || isDisableEmail} type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                                    </div>
                                    {/* <div className="text-center mt-4 font-weight-light">
                                        Already have an account? <a href="login.html" className="text-primary">Login</a>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content-wrapper ends */}
            </div>
            {/* page-body-wrapper ends */}
        </div>

    )
}

export default Register