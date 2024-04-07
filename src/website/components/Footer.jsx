import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const [contacts, setContacts] = useState([])
    const [services, setServices] = useState([])

    const fetchService = async () => {
        const result = await axios.get("http://localhost:3000/services");
        setServices(() => result.data)
    }
    const fetchContact = async () => {
        const result = await axios.get("http://localhost:3000/contacts");

        setContacts((prev) => result.data)
    }

    useEffect(() => {
        fetchContact()
        fetchService()
    }, [])
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-12">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3" />{contacts.length > 0 && contacts[0].location}</p>
                            <p className="mb-2"><i className="fa fa-phone me-3" />{contacts.length > 0 && contacts[0].phone}</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />{contacts.length > 0 && contacts[0].email}</p>
                            <div className="d-flex pt-2">

                                {contacts.length > 0 && contacts[0].social.map((soc) => (
                                    <Link key={soc.id} to={soc.link} className="btn btn-outline-light btn-social rounded-circle" ><i className={`fab fa-${soc.name}`} /></Link>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Services</h5>
                            {services.length > 0 && services.map((service, index) => {
                                return (
                                    <Link key={service.id} to={"/service"} className="btn btn-link" >{service.title}</Link>
                                )
                            })}
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <a className="btn btn-link" >About Us</a>
                            <a className="btn btn-link" >Contact Us</a>
                            <a className="btn btn-link" >Our Services</a>
                            <a className="btn btn-link" >Terms &amp; Condition</a>
                            <a className="btn btn-link" >Support</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <Link className="border-bottom" >Your Site Name</Link>, All Right Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
                                Designed By <Link className="border-bottom" to="https://htmlcodex.com">HTML Codex</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
        </div>
    )
}

export default Footer