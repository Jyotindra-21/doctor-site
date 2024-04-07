import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

function AdminProfile() {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState([])
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
        <div className="content-wrapper">
            <div className="row">
                <h5 className="mb-2 text-titlecase mb-4">Admin Profile</h5>
                <div className="col-8 grid-margin m-auto">
                    <div className="card">
                        <div className="card-body">
                            <form id='service_form' className="forms-sample" action='' method='post'>
                                <div className="form-group">
                                    <h4 style={{textAlign:"center" }}>{admin.length > 0 && <img style={{height:"200px" , width:"200px" , borderRadius:"50%" , objectFit:"contain" , border:"5px solid black", outline:"3px solid grey"}} src={admin[0].img} alt="" /> }</h4>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="doctor_name">Username</label>
                                    <h4>{admin.length > 0 && admin[0].username}</h4>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="doctor_department">Email</label>
                                    <h4>{admin.length > 0 && admin[0].email}</h4>
                                </div>
                                <button type="button" className="btn btn-primary mr-2">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfile