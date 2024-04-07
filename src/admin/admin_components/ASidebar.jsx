import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function ASidebar() {
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
        <>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item" >
                        <NavLink className="nav-link" to="/admin/" end>
                            <i className="typcn typcn-device-desktop menu-icon" />
                            <span className="menu-title">Dashboard</span>
                            {/* <div className="badge badge-danger">new</div> */}
                        </NavLink>
                    </li>
                    {admin.length > 0 && admin[0].status === "1" && <li className="nav-item" >
                        <NavLink className="nav-link" to="/admin/manage-admin" end>
                            <i className="typcn typcn-user menu-icon" />
                            <span className="menu-title">Admin</span>
                            {/* <div className="badge badge-danger">new</div> */}
                        </NavLink>
                    </li>}

                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#serviceForm" aria-expanded="false" aria-controls="serviceForm">
                            <i className="typcn typcn-document-text menu-icon" />
                            <span className="menu-title">Services</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="serviceForm">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link" to="manage-service">Manage Service</NavLink></li>
                                <li className="nav-item"> <NavLink className="nav-link" to="add-service">Add Service</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#doctorForm" aria-expanded="false" aria-controls="doctorForm">
                            <i className="typcn typcn-film menu-icon" />
                            <span className="menu-title">Doctors</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="doctorForm">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><NavLink className="nav-link" to="manage-doctor">Manage Doctor</NavLink></li>
                                <li className="nav-item"><NavLink className="nav-link" to="add-doctor">Add Doctor</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#appointmentForm" aria-expanded="false" aria-controls="appointmentForm">
                            <i className="typcn typcn-chart-pie-outline menu-icon" />
                            <span className="menu-title">Appointment</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="appointmentForm">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"> <NavLink className="nav-link" to="manage-appointment">Manage Appointment</NavLink></li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                            <i className="typcn typcn-th-small-outline menu-icon" />
                            <span className="menu-title">Contact</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="tables">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item"><NavLink className="nav-link" to="manage-contact">Manage Contact</NavLink></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>

        </>

    )
}

export default ASidebar