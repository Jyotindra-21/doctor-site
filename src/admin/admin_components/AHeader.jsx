
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AHeader() {
    const navigate = useNavigate()
    const [admin, setAdmin] = useState([])

    const handleLogout = () => {
        localStorage.removeItem('admin')
        navigate("/")
    }


    const currentDate = new Date().toLocaleDateString()


    // const currentDateg = new Date(currentYear , currentMonth , currentDate)

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

        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex justify-content-center">
                <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                    <a className="navbar-brand brand-logo" href="index.html"><img src="../src/admin/admin_assets/images/logo.svg" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="../src/admin/admin_assets/images/logo-mini.svg" alt="logo" /></a>
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="typcn typcn-th-menu" />
                    </button>
                </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-profile dropdown">
                        <a className="nav-link" href="#" data-toggle="dropdown" id="profileDropdown">
                            {admin.length > 0 && <img src={admin[0].img} alt="profile" />}
                            <span className="nav-profile-name">{admin.length > 0 && admin[0].username}</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                            <Link to="/admin/profile" className="dropdown-item">
                                <i className="typcn typcn-user-outline text-primary" />
                                Profile
                            </Link>
                            <button type="button" onClick={handleLogout} className="dropdown-item">
                                <i className="typcn typcn-eject text-primary" />
                                Logout
                            </button>
                        </div>
                    </li>
                    <li className="nav-item nav-user-status dropdown">
                        <p className="mb-0">Last login was 23 hours ago.</p>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item nav-date dropdown">
                        <a className="nav-link d-flex justify-content-center align-items-center" >
                            <h6 className="date mb-0">{currentDate}</h6>
                            <i className="typcn typcn-calendar" />
                        </a>
                    </li>
                </ul>
                <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                    <span className="typcn typcn-th-menu" />
                </button>
            </div>
        </nav>
    )
}

export default AHeader