import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {

  const [admin, setAdmin] = useState([])
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    for (const [key, value] of formData.entries()) {
      if (value.trim() === '') {
        toast.error(`${key} field require.`)
        return;
      }
    }
    const logadmin = Object.fromEntries(formData);
    console.log(logadmin.email)
    const res = await axios.get(`http://localhost:3000/admin?email=${logadmin.email}`)
    if (res.data.length > 0) {
      if (res.data[0].password === logadmin.password) {
        localStorage.setItem('admin', JSON.stringify(res.data));
        toast.success("Login Successfully !!")
        navigate('/admin/')
      } else {
        toast.error("Invalid Password !!")
      }
    } else {
      toast.error("User Not Found !!")
    }
  }
  useEffect(() => {
    const loggedAdmin = localStorage.getItem("admin")
    if (loggedAdmin !== null) {
      navigate("/admin/")
    }
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
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form className="pt-3" method="post" onSubmit={handleLogin}>
                  <div className="form-group">
                    <input type="email" name='email' className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="password" name='password' className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <div className="mt-3">
                    <button type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN IN</button>
                  </div>
                  <div className="my-2 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        Keep me signed in
                      </label>
                    </div>
                    <a href="#" className="auth-link text-black">Forgot password?</a>
                  </div>
                  <div className="mb-2">
                    <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                      <i className="typcn typcn-social-facebook mr-2" />Connect using facebook
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <a href="register.html" className="text-primary">Create</a>
                  </div>
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

export default Login