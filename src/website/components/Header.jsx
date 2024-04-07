import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header() {
    const [contacts, setContacts] = useState([])
    const [user, setUser] = useState([])
    const [isDisable, setIsDisable] = useState(false)
    const [isDisableEmail, setIsDisableEmail] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const fetchContact = async () => {
        const result = await axios.get("http://localhost:3000/contacts");
        setContacts((prev) => result.data)
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        for (const [key, value] of formData.entries()) {
            if (value.trim() === '') {
                toast.error(`${key} field require.`)
                return;
            }
        }
        const user = Object.fromEntries(formData);
        const res = await axios.get(`http://localhost:3000/users?email=${user.email}`)
        if (res.data.length > 0) {
            if (res.data[0].password === user.password) {
                localStorage.setItem('user', JSON.stringify(res.data));
                toast.success("Login Successfully !!")
                document.getElementById("closeLoginModal").click()
                getUser()
            } else {
                toast.error("Invalid Password !!")
            }
        } else {
            toast.error("User Not Found !!")
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("user")
        toast.success('Logout successfully !!')
        getUser()
    }
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
        const res = await axios.post("http://localhost:3000/users", newUser);

        if (res.status === 201) {
            toast.success("Register successfully !!")
            localStorage.setItem("user", JSON.stringify([newUser]))
            e.target.reset()
            document.getElementById("closeSignUpModal").click()
            getUser()
        }

    }

    const handleOnchangeUsername = async (e) => {
        if (e.target.value.trim() !== "") {
            const res = await axios.get(`http://localhost:3000/users?username=${e.target.value}`)
            if (res.data.length > 0) {
                setIsDisable(true)
                setError("username already exist.")
                return
            } else {
                setIsDisable(false)
            }
        }
    }
    const handleOnchangeEmail = async (e) => {
        if (e.target.value.trim() !== "") {
            const res = await axios.get(`http://localhost:3000/users?email=${e.target.value}`)
            if (res.data.length > 0) {
                setIsDisableEmail(true)
                setError("Email already exist.")
                return
            } else {
                setIsDisableEmail(false)
            }
        }
    }

    const getUser = () => {
        const loggedUser = localStorage.getItem("user")
        if (loggedUser !== null) {
            setUser(() => JSON.parse(loggedUser))
        }else{
            setUser([])
        }
    }
    useEffect(() => {
        fetchContact()
        getUser()
    }, [])
    return (
        <div>

            {/* Topbar Start */}
            <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
                <div className="row gx-0 d-none d-lg-flex">
                    <div className="col-lg-7 px-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-map-marker-alt text-primary me-2" />
                            <small>{contacts.length > 0 && contacts[0].location}</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center py-3">
                            <small className="far fa-clock text-primary me-2" />
                            <small>{contacts.length > 0 && contacts[0].time}</small>
                        </div>
                    </div>
                    <div className="col-lg-5 px-5 text-end">
                        <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                            <small className="fa fa-phone-alt text-primary me-2" />
                            <small>{contacts.length > 0 && contacts[0].phone}</small>
                        </div>
                        <div className="h-100 d-inline-flex align-items-center">
                            {contacts.length > 0 && contacts[0].social.map((soc) => (
                                <Link key={soc.id} to={soc.link} className="btn btn-sm-square rounded-circle bg-white text-primary me-1" ><i className={`fab fa-${soc.name}`} /></Link>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
                <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h1 className="m-0 text-primary"><i className="far fa-hospital me-3" />Klinik</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav m-auto p-4 p-lg-0 text-center">
                        <NavLink to="/" className="nav-item nav-link ">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                        <div className="nav-item dropdown">
                            <NavLink to="pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                            <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                                <Link to="/pages/feature" className="dropdown-item">Feature</Link>
                                <Link to="/pages/team" className="dropdown-item">Our Doctor</Link>
                                <Link to="/pages/appointment" className="dropdown-item">Appointment</Link>
                                <Link to="/pages/testimonial" className="dropdown-item">Testimonial</Link>
                            </div>
                        </div>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>

                        {user.length == 0 && <div className='d-inline-flex align-items-center'>
                            <button data-bs-toggle="modal" data-bs-target="#loginmodal" type='button' className='btn btn-primary rounded-pill py-2 px-3 mr-2 '>Login</button>
                            <button data-bs-toggle="modal" data-bs-target="#signupmodal" type='button' className='btn btn-primary rounded-pill py-2 px-3'>SignUp</button>
                        </div>}
                        {user.length > 0 &&
                            <div className="nav-item dropdown">
                                <NavLink to="pages" className="nav-link dropdown-toggle" style={{ textTransform: 'capitalize' }} data-bs-toggle="dropdown"><i className="fa fa-user text-primary ml-3 mr-1" style={{ cursor: "pointer" }} /> {user[0].username}</NavLink>
                                <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                                    <Link to="/pages/profile" type='button' className='dropdown-item'>Profile</Link>
                                    <button type='button' onClick={handleLogout} className='dropdown-item'>Logout</button>
                                </div>
                            </div>
                        }
                    </div>
                    <Link to="/pages/appointment" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3" /></Link>
                </div>
            </nav>
            {/* <!-- Login Modal --> */}
            <div className="modal fade" id="loginmodal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" id='closeLoginModal' data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action='' method='post' onSubmit={handleLogin}>
                                <div className="row g-3">

                                    <div className="col-12 col-sm-12">
                                        <input type="email" name='email' className="form-control border-1" placeholder="Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input type="password" name='password' className="form-control border-1" placeholder="Your Password" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <input type="checkbox" id='remember' name="remember" className='mr-2' />
                                        <label htmlFor="remember" >Remember me</label>
                                    </div>
                                    <div style={{ textAlign: "right" }} className='col-6 col-sm-6'>
                                        <Link to="/forgot-password">Forgot Password?</Link>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                    </div>
                                    <div className="col-12">
                                        <p >Not a Member ? <span data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close" data-bs-target="#signupmodal" style={{ color: "blue", cursor: "pointer" }}  >SingUp</span></p>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Login Modal --> */}
            <div className="modal fade" id="signupmodal" tabIndex={-1} aria-labelledby="singupmodallabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="singupmodallabel">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" id='closeSignUpModal' aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action='' method='post' onSubmit={handleSignup}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12">
                                        <input type="text" name='name' className="form-control border-1" placeholder="Enter Your Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input type="email" name='email' onChange={handleOnchangeEmail} className="form-control border-1" placeholder="Enter Your Email" style={{ height: 55 }} />
                                        {isDisableEmail && <small style={{ color: "red" }}>Email already exist.</small>}

                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input type="text" name='username' onChange={handleOnchangeUsername} className="form-control border-1" placeholder="Enter Your Username" style={{ height: 55 }} />
                                        {isDisable && <small style={{ color: "red" }}>Username already exist.</small>}
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input type="password" name='password' className="form-control border-1" placeholder="Enter Your Password" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" disabled={isDisable || isDisableEmail} id='singup' type="submit">Sign Up</button>
                                    </div>
                                    <div className="col-12">
                                        <p >Already a Member ? <span data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close" data-bs-target="#loginmodal" style={{ color: "blue", cursor: "pointer" }}  >Login</span></p>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            {/* Navbar End */}
        </div>
    )
}

export default Header