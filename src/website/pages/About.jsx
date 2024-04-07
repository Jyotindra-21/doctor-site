import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function About() {
    const [doctors, setDoctors] = useState([])

    const fetchDoctor = async () => {
        const result = await axios.get("http://localhost:3000/doctors")
        setDoctors((prev) => result.data)
    }
    const delayTime = (index) => {
        let time = `${((index + (1 * index + 1)) * 0.1).toFixed(1)}s`;
        return time.toString()
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
        fetchDoctor()
    },[])
    return (
        <>
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
                        <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb text-uppercase mb-0">
                                <li className="breadcrumb-item"><a className="text-white" >Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" >Pages</a></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="d-flex flex-column">
                                    <img className="img-fluid rounded w-75 align-self-end" src="src/website/assets/img/about-1.jpg" />
                                    <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="src/website/assets/img/about-2.jpg" style={{ marginTop: '-25%' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                                <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                                <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                                <p><i className="far fa-check-circle text-primary me-3" />Quality health care</p>
                                <p><i className="far fa-check-circle text-primary me-3" />Only Qualified Doctors</p>
                                <p><i className="far fa-check-circle text-primary me-3" />Medical Research Professionals</p>
                                <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" >Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Feature Start */}
                <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
                    <div className="container feature px-lg-0">
                        <div className="row g-0 mx-lg-0">
                            <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                                <div className="p-lg-5 ps-lg-0">
                                    <p className="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
                                    <h1 className="text-white mb-4">Why Choose Us</h1>
                                    <p className="text-white mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                                    <div className="row g-4">
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: 55, height: 55 }}>
                                                    <i className="fa fa-user-md text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-white mb-2">Experience</p>
                                                    <h5 className="text-white mb-0">Doctors</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: 55, height: 55 }}>
                                                    <i className="fa fa-check text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-white mb-2">Quality</p>
                                                    <h5 className="text-white mb-0">Services</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: 55, height: 55 }}>
                                                    <i className="fa fa-comment-medical text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-white mb-2">Positive</p>
                                                    <h5 className="text-white mb-0">Consultation</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="d-flex align-items-center">
                                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{ width: 55, height: 55 }}>
                                                    <i className="fa fa-headphones text-primary" />
                                                </div>
                                                <div className="ms-4">
                                                    <p className="text-white mb-2">24 Hours</p>
                                                    <h5 className="text-white mb-0">Support</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100">
                                    <img className="position-absolute img-fluid w-100 h-100" src="src/website/assets/img/feature.jpg" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Feature End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                            <h1>Our Experience Doctors</h1>
                        </div>
                        <div className="row g-4">
                            {doctors.length > 0 && doctors.map((doctor, index) => (
                                <div key={doctor.id} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={delayTime(index)}>
                                    <div className="team-item position-relative rounded overflow-hidden">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" src={doctor.img} />
                                        </div>
                                        <div className="team-text bg-light text-center p-4">
                                            <h5>{doctor.fullname}</h5>
                                            <p className="text-primary">{doctor.department}</p>
                                            <div className="team-social text-center">

                                                <Link to={doctor.social.facebook} className="btn btn-square"  ><i className="fab fa-facebook-f" /></Link>
                                                <Link to={doctor.social.twitter} className="btn btn-square" ><i className="fab fa-twitter" /></Link>
                                                <Link to={doctor.social.instagram} className="btn btn-square" ><i className="fab fa-instagram" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
                {/* Team End */}
            </div>

        </>
    )
}

export default About