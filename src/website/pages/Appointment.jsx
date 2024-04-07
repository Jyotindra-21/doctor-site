import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Appointment() {

    const [doctors, setDoctors] = useState([])
    const [user, setUser] = useState([])
    const [contacts, setContacts] = useState([])
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1000);
    };
    const fetchContact = async () => {
        const result = await axios.get("http://localhost:3000/contacts");
        setContacts((prev) => result.data)
    }

    const fetchDoctors = async () => {
        const result = await axios.get("http://localhost:3000/doctors")
        setDoctors((prev) => result.data)
    }

    const getUser = () => {
        const loggedUser = localStorage.getItem("user")
        if (loggedUser !== null) {
            setUser(() => JSON.parse(loggedUser))
        }
    }

    const handleAppointment = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("id", new Date().getTime().toString())
        formData.append("userID", user[0].id)
        // formData.append("userID", )
        for (const [key, value] of formData.entries()) {
            if (value === '') {
                toast.error(`${key} is required!`);
                return;
            }
        }
        const newAppointment = Object.fromEntries(formData)

        const response = await axios.post("http://localhost:3000/appointments", newAppointment)

        if (response.status === 201) {
            toast.success("Your appointment request send !")
            setTimeout(() => {
                toast.success("We will contact you soon..")
            }, 2000)
            e.target.reset()
        } else {
            toast.error("Something went wrong while send request !!!")
        }
    }

    React.useEffect(() => {
        spinner()
        fetchDoctors()
        getUser()
        fetchContact()
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
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Appointment</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><a className="text-white">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" >Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Appointment</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}
            {/* Appointment Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                            <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: 55, height: 55 }}>
                                    <i className="fa fa-phone-alt text-primary" />
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Call Us Now</p>
                                    <h5 className="mb-0">{contacts.length > 0 && contacts[0].phone}</h5>
                                </div>
                            </div>
                            <div className="bg-light rounded d-flex align-items-center p-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: 55, height: 55 }}>
                                    <i className="fa fa-envelope-open text-primary" />
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Mail Us Now</p>
                                    <h5 className="mb-0">{contacts.length > 0 && contacts[0].email}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                                <form action='' method='post' onSubmit={handleAppointment} >
                                    <div className="row g-3">
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name='fullname' className="form-control border-0" placeholder="Your Name" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="email" name='email' className="form-control border-0" placeholder="Your Email" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <input type="text" name='mobile' className="form-control border-0" placeholder="Your Mobile" style={{ height: 55 }} />
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <select name='doctorID' className="form-select border-0" style={{ height: 55 }}>
                                                <option defaultValue>Choose Doctor</option>
                                                {doctors.length > 0 && doctors.map((doctor) => (
                                                    <option key={doctor.id} value={doctor.id}>{doctor.fullname}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="date" id="date" data-target-input="nearest">
                                                <input type="date" name='date' className="form-control border-0 datetimepicker-input" placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{ height: 55 }} />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="time" id="time" data-target-input="nearest">
                                                <input type="time" name='time' className="form-control border-0 datetimepicker-input" placeholder="Choose Time" data-target="#time" data-toggle="datetimepicker" style={{ height: 55 }} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <textarea name='description' className="form-control border-0" rows={5} placeholder="Describe your problem" defaultValue={""} />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Appointment End */}
        </div>

    )
}

export default Appointment