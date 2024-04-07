import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function ManageService() {
  const [services, setServices] = useState([])

  const fetchService = async () => {
    const result = await axios.get("http://localhost:3000/services")
    // console.log(result);
    setServices((prev) => result.data)
    // console.log(service);
  }

  const deleteService = async (id) => {

    const isDeleted = confirm("Are you sure ? You want to delete service.");
    if (!isDeleted) return;
    const response = await axios.delete(`http://localhost:3000/services/${id}`)
    // console.log(response);
    if (response.status === 200) {
      toast.success("Service Deleted !!");
      fetchService()

    }
  }
  React.useEffect(() => {
    fetchService()
  }, [])


  return (
    <div className="content-wrapper">
      <div className="row">
        <h5 className="mb-2 text-titlecase mb-4">Manage Service</h5>
        <div className="col-md-12">
          <div className='col-md-12 d-flex'>
            <Link type='button' className="btn btn-success btn-sm btn-icon-text mb-2  ml-auto" to="../add-service">Add Service</Link>
          </div>
          <div className="card">
            <div className="table-responsive pt-3">
              <table className="table table-striped project-orders-table">

                <thead>
                  <tr>
                    <th className="ml-5">ID</th>
                    <th>Service Name</th>
                    <th>Description</th>
                    <th>Icon</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id}>
                      <td>#{service.id}</td>
                      <td>{service.title}</td>
                      <td style={{ width: "20px" }}>{service.description}</td>
                      <td><i className={`fa ${service.icon} text-primary me-3`} /></td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to={`/admin/service/${service.id}`} type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                            Edit
                            <i className="typcn typcn-edit btn-icon-append" />
                          </Link>
                          <button type="button" onClick={() => deleteService(service.id)} className="btn btn-danger btn-sm btn-icon-text">
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

export default ManageService