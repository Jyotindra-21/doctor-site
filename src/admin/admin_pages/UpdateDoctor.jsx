import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function UpdateDoctor() {

  const navigate = useNavigate()
  const [doctor, setDoctor] = useState({
    fullname: "",
    department: "",
    img: "",
    social: {
      id: "",
      facebook: "",
      twitter: "",
      instagram: "",
    },
    id: ""
  })
  const handleChange = (e) => {
    setDoctor({
      ...doctor, [e.target.name]: e.target.value, social: {
        [e.target.name]: e.target.value
      }
    })
  }
  const { doctorID } = useParams()
  const updateDoctor = async (id) => {
    const response = await axios.get(`http://localhost:3000/doctors/${id}`)
    if (response.status == 200) {
      setDoctor(response.data)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)


    for (const [key, value] of formData.entries()) {
      if (value === '') {
        toast.error(`${key} is required!`);
        return;
      }
    }
    const { fullname, department, img, instagram, twitter, facebook } = Object.fromEntries(formData)
    const newDoctor = { fullname, department, img, social: { id: doctor.social.id, facebook, twitter, instagram } }
    // console.log(newDoctor);
    // console.log(formdata);
    const response = await axios.patch(`http://localhost:3000/doctors/${doctor.id}`, { ...newDoctor })
    if (response.status === 200) {
      toast.success("Doctor Update Successfully.");
      e.target.reset()
      navigate(-1)
    }
  }

  useEffect(() => {
    updateDoctor(doctorID)
  }, [])
  return (

    <div className="content-wrapper">
      <div className="row">

        <div className="col-8 grid-margin m-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Doctor</h4>
              <form id='service_form' className="forms-sample" onSubmit={handleSubmit} action='' method='post'>
                <div className="form-group">
                  <label htmlFor="doctor_name">Doctor Name</label>
                  <input type="text" name='fullname' onChange={handleChange} value={doctor.fullname} className="form-control" id="doctor_name" placeholder="Doctor Full Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctor_department">Department</label>
                  <input type="text" name='department' onChange={handleChange} value={doctor.department} className="form-control" id="doctor_department" placeholder="Department" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctor_img">Image</label>
                  <input type="text" name='img' onChange={handleChange} value={doctor.img} className="form-control" id="doctor_img" placeholder="Image URL" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctor_img">Social</label>
                  <div className="row">
                    <div className="col-4">
                      <input type="text" name='facebook' onChange={handleChange} value={doctor.social.facebook} className="form-control" id="doctor_img" placeholder="Facebook URL" />
                    </div>
                    <div className="col-4">
                      <input type="text" name='instagram' onChange={handleChange} value={doctor.social.instagram} className="form-control" id="doctor_img" placeholder="Instagram URL" />
                    </div>
                    <div className="col-4">
                      <input type="text" name='twitter' onChange={handleChange} value={doctor.social.twitter} className="form-control" id="doctor_img" placeholder="Twitter URL" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mr-2">Update</button>
                <button onClick={() => navigate(-1)} type="reset" className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default UpdateDoctor

