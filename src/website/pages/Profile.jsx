import React, { useState } from 'react'
import styles from "./Profile.module.css"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
function Profile() {

    const [user, setUser] = useState([])
    const [updateUser, setUpdateUser] = useState({})
    const navigate = useNavigate()

    const handleUpdate = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("id", updateUser.id)
        for (const [key, value] of formData.entries()) {
            if (value.trim() === "") {
                toast.error(`${key} field require.`)
                return
            }
        }
        const newUpdateUser = Object.fromEntries(formData)
        const res = await axios.patch(`http://localhost:3000/users/${updateUser.id}`, newUpdateUser);

        if (res.status === 200) {
            toast.success("Update successfully !!")
            localStorage.setItem("user", JSON.stringify([newUpdateUser]))
            e.target.reset()
            document.getElementById("closeModal").click()
            getUser()
        }
    }
    const handleOnChange = (e) => {
        setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })
    }
    const handleUpdateModal = async (id) => {
        const updateUser = await axios.get(`http://localhost:3000/users/${id}`)
        setUpdateUser(updateUser.data)
    }

    const getUser = () => {
        const loggedUser = localStorage.getItem("user")
        if (loggedUser !== null) {
            setUser(() => JSON.parse(loggedUser))
            return
        }
        navigate("/")
    }
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
    };

    React.useEffect(() => {
        spinner()
        getUser()
    }, [])
    return (
        <div>
            {/* Spinner Start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}
            {/* Page Header Start */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Profile</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><a className="text-white" >Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Profile</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Testimonial Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Profile</p>
                        <h1 style={{ textTransform: "capitalize" }}>Welcome {user.length > 0 && user[0].name}</h1>
                    </div>

                    <div className='container'>
                        <div className="row justify-content-center align-items-center" >
                            <div className="col-12 col-md-6">
                                <div className={styles.profile_img}>
                                    <img src={user[0]?.img || "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp"} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className={styles.user_details}>
                                    <table>
                                        <thead></thead>
                                        <tbody>
                                            <tr>
                                                <td className={styles.head}><i className="fa fa-user"></i></td>
                                                <td className={styles.content}>{user.length > 0 && user[0].username}</td>
                                            </tr>
                                            <tr>
                                                <td className={styles.head}><i className="fa fa-envelope"></i></td>
                                                <td className={styles.content}>{user.length > 0 && user[0].email}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <button data-bs-toggle="modal" data-bs-target="#profileModal" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleUpdateModal(user[0].id)} className='btn btn-primary mt-3 ' style={{ width: "100px" }}>UPDATE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="profileModal" tabIndex={-1} aria-labelledby="profileModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="singupmodallabel">Sign Up</h5>
                            <button type="button" id='closeModal' className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <form action='' method='post' onSubmit={handleUpdate}>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-12">
                                        <input type="text" name='name' onChange={handleOnChange} value={updateUser.name || ""} className="form-control border-1" placeholder="Enter Your Name" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input type="email" name='email' onChange={handleOnChange} value={updateUser?.email || ""} className="form-control border-1" placeholder="Enter Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input type="text" name='username' onChange={handleOnChange} value={updateUser?.username || ""} className="form-control border-1" placeholder="Enter Your Username" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12 col-sm-12">
                                        <input type="url" name='img' onChange={handleOnChange} value={updateUser?.img || ""} className="form-control border-1" placeholder="Enter Your Image URL" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" id='updateProfile' type="submit">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile