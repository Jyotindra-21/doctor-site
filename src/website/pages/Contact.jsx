import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function Contact() {

    const [contacts, setContacts] = useState([])
    const [user, setUser] = useState([])


    const fetchContact = async () => {
        const result = await axios.get("http://localhost:3000/contacts");

        setContacts((prev) => result.data)
    }
    const getUser = () => {
        const loggedUser = localStorage.getItem("user")
        if (loggedUser !== null) {
            setUser(() => JSON.parse(loggedUser))
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        formData.append("id", new Date().getTime().toString());
        formData.append("userID", user[0].id)

        for (const [key, value] of formData.entries()) {
            if (value.trim() === "") {
                toast.error(`${key} filed require.`);
                document.querySelector(`#${key}`).focus()
                return;
            }
        }
        const newContact = Object.fromEntries(formData)

        const response = await axios.post("http://localhost:3000/contactus", newContact)
        if (response.status === 201) {
            toast.success("Message send.");
            setTimeout(() => {
                toast.success("We will contact you soon...");

            }, 2000);
            e.target.reset()
        }


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
        fetchContact()
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
                    <h1 className="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb text-uppercase mb-0">
                            <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                            <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                            <li className="breadcrumb-item text-primary active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* Page Header End */}

            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="h-100 bg-light rounded d-flex align-items-center p-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: 55, height: 55 }}>
                                    <i className="fa fa-map-marker-alt text-primary" />
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Address</p>
                                    <h5 className="mb-0">{contacts.length > 0 && contacts[0].location}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="h-100 bg-light rounded d-flex align-items-center p-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: 55, height: 55 }}>
                                    <i className="fa fa-phone-alt text-primary" />
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Call Us Now</p>
                                    <h5 className="mb-0">{contacts.length > 0 && contacts[0].phone}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="h-100 bg-light rounded d-flex align-items-center p-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: 55, height: 55 }}>
                                    <i className="fa fa-envelope-open text-primary" />
                                </div>
                                <div className="ms-4">
                                    <p className="mb-2">Mail Us Now</p>
                                    <h5 className="mb-0">{contacts.length > 0 && contacts[0].email}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="bg-light rounded p-5">
                                <p className="d-inline-block border rounded-pill py-1 px-4">Contact Us</p>
                                <h1 className="mb-4">Have Any Query? Please Contact Us!</h1>
                                <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form action='' method='post' onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" name='fullname' id="fullname" placeholder="Your Full Name" />
                                                <label htmlFor="fullname">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" name='email' id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" name='subject' id="subject" placeholder="Subject" />
                                                <label htmlFor="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" name='message' placeholder="Leave a message here" id="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100" style={{ minHeight: 400 }}>
                                <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}</div>

    )
}

export default Contact