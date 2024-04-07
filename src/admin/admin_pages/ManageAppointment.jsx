import React, { useRef, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';



function ManageAppointment() {
  const [appointments, setAppointments] = useState([])
  const [doctor, setDoctor] = useState([])

  const fetchAppointment = async () => {
    const result = await axios.get("http://localhost:3000/appointments")
    // console.log(result.data);
    setAppointments((prev) => result.data)

  }

  const fetchDoctor = async () => {
    const result = await axios.get(`http://localhost:3000/doctors`);
    setDoctor((prev) => result.data)
  }


  const getDoctor = (aid) => {

    const doctorName = doctor.filter((sindoc) => sindoc.id == aid ? sindoc : "").map((doc) => doc.fullname).toString()
    return doctorName;
  }

  const deleteAppointment = async (id) => {

    const isDeleted = confirm("Are you sure ? You want to delete appointment.");
    if (!isDeleted) return;
    const response = await axios.delete(`http://localhost:3000/appointments/${id}`)
    // console.log(response);
    if (response.status === 200) {
      toast.success("Appointment Deleted !!");
      fetchAppointment()
    }
  }
  React.useEffect(() => {
    fetchAppointment()
    fetchDoctor()
  }, [])
  return (
    <div className="content-wrapper">
      <div className="row">
        <h5 className="mb-2 text-titlecase mb-4">Manage Appointment</h5>
        <div className="col-md-12">
          <div className='col-md-12 d-flex'>

            {/* <Link type='button' className="btn btn-success btn-sm btn-icon-text mb-2  ml-auto" to="../add-appointment">Add Appointment</Link> */}
          </div>
          <div className="card">
            <div className="table-responsive pt-3">
              <table className="table table-striped project-orders-table">

                <thead>
                  <tr>
                    <th className="ml-5">ID</th>
                    <th>Full Name</th>
                    <th>Email ID</th>
                    <th>Mobile</th>
                    <th>Description</th>
                    <th>Doctor</th>
                    <th>User</th>
                    <th>Date & Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.length > 0 && appointments.map((appointment) => (
                    <tr key={appointment.id}>

                      <td>#{appointment.id}</td>
                      <td>{appointment.fullname}</td>
                      <td>{appointment.email}</td>
                      <td>{appointment.mobile}</td>
                      <td>{appointment.description}</td>
                      {/* <td>
                        {doctor.length > 0 && doctor.map((doc) => (
                          (doc.id == appointment.doctorID) ? doc.fullname : ""
                        ))}
                      </td>
                      <td></td> */}
                      <td>{getDoctor(appointment.doctorID)}</td>
                      <td>{appointment.userID}</td>
                      <td>{appointment.date} {" "} {appointment.time}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                            Edit
                            <i className="typcn typcn-edit btn-icon-append" />
                          </button>
                          <button type="button" onClick={() => deleteAppointment(appointment.id)} className="btn btn-danger btn-sm btn-icon-text">
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

export default ManageAppointment