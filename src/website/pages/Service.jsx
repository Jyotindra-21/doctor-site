import axios from 'axios';
import React, { useState } from 'react'

function Service() {
    const [services, setServices] = useState([])

    const fetchService = async () => {
        const result = await axios.get("http://localhost:3000/services");
        setServices(() => result.data)
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
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb text-uppercase mb-0">
                                <li className="breadcrumb-item"><a className="text-white" >Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white">Pages</a></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* Page Header End */}
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
                                        <i className="fa fa-phone- text-primary" />
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Call Us Now</p>
                                        <h5 className="mb-0">+012 345 6789</h5>
                                    </div>
                                </div>
                                <div className="bg-light rounded d-flex align-items-center p-5">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{ width: 55, height: 55 }}>
                                        <i className="fa fa-envelope-open text-primary" />
                                    </div>
                                    <div className="ms-4">
                                        <p className="mb-2">Mail Us Now</p>
                                        <h5 className="mb-0">info@example.com</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                                    <form>
                                        <div className="row g-3">
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control border-0" placeholder="Your Name" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="email" className="form-control border-0" placeholder="Your Email" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{ height: 55 }} />
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <select className="form-select border-0" style={{ height: 55 }}>
                                                    <option defaultValue>Choose Doctor</option>
                                                    <option value={1}>Doctor 1</option>
                                                    <option value={2}>Doctor 2</option>
                                                    <option value={3}>Doctor 3</option>
                                                </select>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="date" id="date" data-target-input="nearest">
                                                    <input type="text" className="form-control border-0 datetimepicker-input" placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{ height: 55 }} />
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <div className="time" id="time" data-target-input="nearest">
                                                    <input type="text" className="form-control border-0 datetimepicker-input" placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" style={{ height: 55 }} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control border-0" rows={5} placeholder="Describe your problem" defaultValue={""} />
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
            </div>

        </>
    )
}

export default Service