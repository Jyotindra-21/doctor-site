import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddDoctor() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    let newId = new Date().getTime().toString()
    formData.append("id", newId)

    for (const [key, value] of formData.entries()) {
      if (value === '') {
        toast.error(`${key} is required!`);
        return;
      }
    }

    const { id, fullname, department, img, instagram, twitter, facebook } = Object.fromEntries(formData)
    const newDoctor = { id, fullname, department, img, social: { id: (new Date().getTime() + 12456).toString(), facebook, twitter, instagram } }
    // console.log(newDoctor);
    // console.log(formdata);
    const response = await axios.post("http://localhost:3000/doctors", { ...newDoctor })
    if (response.status === 201) {
      toast.success("Doctor Created Successfully.");
      e.target.reset()
    }
  }
  return (

    <div className="content-wrapper">
      <div className="row">
        <div className='col-md-12 d-flex'>
          <Link type='button' className="btn btn-success btn-sm btn-icon-text mb-2  ml-auto" to="../manage-doctor">Manage Doctor</Link>
        </div>
        <div className="col-8 grid-margin m-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Doctor Form</h4>
              <p className="card-description">
                Add Doctor
              </p>
              <form id='service_form' className="forms-sample" onSubmit={handleSubmit} action='' method='post'>
                <div className="form-group">
                  <label htmlFor="doctor_name">Doctor Name</label>
                  <input type="text" name='fullname' className="form-control" id="doctor_name" placeholder="Doctor Full Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctor_department">Department</label>
                  <input type="text" name='department' className="form-control" id="doctor_department" placeholder="Department" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctor_img">Image</label>
                  <input type="text" name='img' className="form-control" id="doctor_img" placeholder="Image URL" />
                </div>
                <div className="form-group">
                  <label htmlFor="doctor_img">Social</label>
                  <div className="row">
                    <div className="col-4">
                      <input type="text" name='facebook' className="form-control" id="doctor_img" placeholder="Facebook URL" />
                    </div>
                    <div className="col-4">
                      <input type="text" name='instagram' className="form-control" id="doctor_img" placeholder="Instagram URL" />
                    </div>
                    <div className="col-4">
                      <input type="text" name='twitter' className="form-control" id="doctor_img" placeholder="Twitter URL" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <button type="reset" className="btn btn-light">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddDoctor

{/* <div className="col-12 grid-margin stretch-card">
<div className="card">
  <div className="card-body">
    <h4 className="card-title">Doctor Form</h4>
    <p className="card-description">
      Add Doctor
    </p>
    <form className="forms-sample">
      <div className="form-group">
        <label htmlFor="service_name">Doctor Name</label>
        <input type="text" className="form-control" id="service_name" placeholder="Doctor Name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail3">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail3" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword4">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword4" placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleSelectGender">Gender</label>
        <select className="form-control" id="exampleSelectGender">
          <option>Male</option>
          <option>Female</option>
        </select>
      </div>
      <div className="form-group">
        <label>File upload</label>
        <input type="file" name="img[]" className="file-upload-default" />
        <div className="input-group col-xs-12">
          <input type="text" className="form-control file-upload-info" disabled placeholder="Upload Image" />
          <span className="input-group-append">
            <button className="file-upload-browse btn btn-primary" type="button">Upload</button>
          </span>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputCity1">City</label>
        <input type="text" className="form-control" id="exampleInputCity1" placeholder="Location" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleTextarea1">Textarea</label>
        <textarea className="form-control" id="exampleTextarea1" rows={4} defaultValue={""} />
      </div>
      <button type="submit" className="btn btn-primary mr-2">Submit</button>
      <button className="btn btn-light">Cancel</button>
    </form>
  </div>
</div>
</div> */}