import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Home() {
    const [services, setServices] = useState([])
    const [doctors, setDoctors] = useState([])
    const [headInfo, setHeadInfo] = useState({})
    

    const fetchDoctor = async () => {
        const result = await axios.get("http://localhost:3000/doctors")
        setDoctors((prev) => result.data)
    }
    const fetchService = async () => {
        const result = await axios.get("http://localhost:3000/services");
        setServices(() => result.data)
    }
    const fetchHeadInfo = async () => {
        const result = await axios.get("http://localhost:3000/headerInfo")
        setHeadInfo((prev) => result.data)
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
        fetchService()
        fetchHeadInfo()
        fetchDoctor()
        
    },[])
    return (
        <div>

            {/* Spinner Start */}
            <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            {/* Spinner End */}

            {/* Header Start */}
            <div className="container-fluid header bg-primary p-0 mb-5">
                <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                        <h1 className="display-4 text-white mb-5">Good Heh Is The Root Of All Heppiness</h1>
                        <div className="row g-4">
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1" data-toggle="counter-up">{headInfo.doctors}</h2>
                                    <p className="text-light mb-0">Expert Doctors</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1" data-toggle="counter-up">{headInfo.stuff}</h2>
                                    <p className="text-light mb-0">Medical Stuff</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="border-start border-light ps-4">
                                    <h2 className="text-white mb-1" data-toggle="counter-up">{headInfo.patients}</h2>
                                    <p className="text-light mb-0">Total Patients</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div className="owl-carousel header-carousel">

                            <div className="owl-carousel-item position-relative">
                                <img className="img-fluid" src="src/website/assets/img/carousel-1.jpg" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Cardiology</h1>
                                </div>
                            </div>
                            <div className="owl-carousel-item position-relative">
                                <img className="img-fluid" src="src/website/assets/img/carousel-2.jpg" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Neurology</h1>
                                </div>
                            </div>
                            <div className="owl-carousel-item position-relative">
                                <img className="img-fluid" src="src/website/assets/img/carousel-3.jpg" />
                                <div className="owl-carousel-text">
                                    <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
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
                            <p><i className="far fa-check-circle text-primary me-3" />Quality heh care</p>
                            <p><i className="far fa-check-circle text-primary me-3" />Only Qualified Doctors</p>
                            <p><i className="far fa-check-circle text-primary me-3" />Medical Research Professionals</p>
                            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" >Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                        <h1>Heh Care Solutions</h1>
                    </div>
                    <div className="row g-4">
                        {services.length > 0 && services.map((service, index) => {

                            return (<div key={service.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delayTime(index)}>
                                <div className="service-item bg-light rounded h-100 p-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                        <i className={`fa ${service.icon} text-primary fs-4`} />
                                    </div>
                                    <h4 className="mb-3">{service.title}</h4>
                                    <p className="mb-4">{service.description}</p>
                                    <a className="btn" ><i className="fa fa-plus text-primary me-3" />Read More</a>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
            {/* Service End */}
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
            {/* Testimonial Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                        <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
                        <h1>What Say Our Patients!</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="src/website/assets/img/testimonial-1.jpg" style={{ width: 100, height: 100 }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="src/website/assets/img/testimonial-2.jpg" style={{ width: 100, height: 100 }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                        <div className="testimonial-item text-center">
                            <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="src/website/assets/img/testimonial-3.jpg" style={{ width: 100, height: 100 }} />
                            <div className="testimonial-text rounded text-center p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                                <h5 className="mb-1">Patient Name</h5>
                                <span className="fst-italic">Profession</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonial End */}

            {/* Back to Top */}
            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up" /></a>
        </div >

    )
}

export default Home