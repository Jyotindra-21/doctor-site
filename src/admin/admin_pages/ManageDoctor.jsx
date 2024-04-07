import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


function ManageDoctor() {
  const [doctors, setDoctors] = useState([])

  const fetchDoctor = async () => {
    const result = await axios.get("http://localhost:3000/doctors")
    // console.log(result);
    setDoctors((prev) => result.data)
    // console.log(doctor);
  }

  const deleteDoctors = async (id) => {

    const isDeleted = confirm("Are you sure ? You want to delete doctor.");
    if (!isDeleted) return;
    const response = await axios.delete(`http://localhost:3000/doctors/${id}`)
    // console.log(response);
    if (response.status === 200) {
      toast.success("Doctor Deleted !!");
      fetchDoctor()

    }
  }

  const imageStyle = { height: "120px", width: "120px", borderRadius: "0", objectFit: "cover" }

  React.useEffect(() => {
    fetchDoctor()
  }, [])
  return (
    <div className="content-wrapper">
      <div className="row">
        <h5 className="mb-2 text-titlecase mb-4">Manage Doctor</h5>
        <div className="col-md-12">
          <div className='col-md-12 d-flex'>
            <Link type='button' className="btn btn-success btn-sm btn-icon-text mb-2  ml-auto" to="../add-doctor">Add Doctor</Link>
          </div>
          <div className="card">
            <div className="table-responsive pt-3">
              <table className="table table-striped project-orders-table">

                <thead>
                  <tr>
                    <th className="ml-5">ID</th>
                    <th>Doctor Name</th>
                    <th>Department</th>
                    <th>Image</th>
                    <th>Social</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {doctors.map((doctor) => (
                    <tr key={doctor.id}>
                      <td>#{doctor.id}</td>
                      <td>{doctor.fullname}</td>
                      <td>{doctor.department}</td>
                      <td ><img src={doctor.img} style={imageStyle} /> </td>
                      <td>
                        <Link target='_blank' to={doctor.social.facebook} style={{ color: 'white' }}>
                          <button type="button" className="btn btn-info btn-rounded btn-icon mr-2">
                            <i className="fab fa-facebook"></i>
                          </button>
                        </Link>
                        <Link target='_blank' to={doctor.social.instagram} style={{ color: 'white' }}>
                          <button type="button" className="btn btn-info btn-rounded btn-icon mr-2">
                            <i className="fab fa-instagram"></i>
                          </button>
                        </Link>
                        <Link target='_blank' to={doctor.social.twitter} style={{ color: 'white' }}>
                          <button type="button" className="btn btn-info btn-rounded btn-icon mr-2">
                            <i className="fab fa-twitter"></i>
                          </button>
                        </Link>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link to={`/admin/doctor/${doctor.id}`} type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                            Edit
                            <i className="typcn typcn-edit btn-icon-append" />
                          </Link>
                          <button type="button" onClick={() => deleteDoctors(doctor.id)} className="btn btn-danger btn-sm btn-icon-text">
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

export default ManageDoctor