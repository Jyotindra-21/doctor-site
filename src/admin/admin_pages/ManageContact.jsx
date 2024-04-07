import React, { useRef, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function ManageContact() {
    const [contacts, setContacts] = useState([])
    const [doctor, setDoctor] = useState([])

    const fetchContact = async () => {
        const result = await axios.get("http://localhost:3000/contacts")
        // console.log(result.data);
        setContacts((prev) => result.data)

    }


    const deleteAppointment = async (id) => {
        const isDeleted = confirm("Are you sure ? You want to delete contact.");
        if (!isDeleted) return;
        const response = await axios.delete(`http://localhost:3000/contacts/${id}`)
        // console.log(response);
        if (response.status === 200) {
            toast.success("Contact Deleted !!");
            fetchContact()
        }
    }
    React.useEffect(() => {
        fetchContact()
    }, [])
    return (
        <div className="content-wrapper">
            <div className="row">
                <h5 className="mb-2 text-titlecase mb-4">Manage Contact</h5>
                <div className="col-md-12">
                    <div className='col-md-12 d-flex'>

                        {/* <Link type='button' className="btn btn-success btn-sm btn-icon-text mb-2  ml-auto" to="../add-contact">Add Contact</Link> */}
                    </div>
                    <div className="card">
                        <div className="table-responsive pt-3">
                            <table className="table table-striped project-orders-table">

                                <thead>
                                    <tr>
                                        <th className="ml-5">ID</th>
                                        <th>Location</th>
                                        <th>Time</th>
                                        <th>Phone</th>
                                        <th>Social</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.length > 0 && contacts.map((contact) => (
                                        <tr key={contact.id}>

                                            <td>#{contact.id}</td>
                                            <td>{contact.location}</td>
                                            <td>{contact.time}</td>
                                            <td>{contact.phone}</td>
                                            
                                            <td>{contact.social.map((soc) =>

                                                <Link  key={soc.id} target='_blank' to={soc.link} style={{ color: 'white' }}>
                                                    <button type="button" className="btn btn-info btn-rounded btn-icon mr-2">
                                                        <i className={`fab fa-${soc.name}`}></i>
                                                    </button>
                                                </Link>
                                            )}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                                        Edit
                                                        <i className="typcn typcn-edit btn-icon-append" />
                                                    </button>
                                                    <button type="button" onClick={() => deleteAppointment(contact.id)} className="btn btn-danger btn-sm btn-icon-text">
                                                        Delete
                                                        <i className="typcn typcn-delete-outline btn-icon-append" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManageContact