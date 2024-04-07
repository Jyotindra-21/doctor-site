import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddService() {

  // const id = useId()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    let newId = new Date().getTime().toString()
    formData.append("id", newId)

    for (const [key, value] of formData.entries()) {
      if (value === '') {
        toast.error(`${key} is required!`);
        document.querySelector(`#${key}`).focus()
        return;
      }
    }
    const newService = Object.fromEntries(formData)
    // console.log(newService);
    // console.log(formdata);
    const response = await axios.post("http://localhost:3000/services", { ...newService })
    if (response.status === 201) {
      toast.success("Service Created Successfully.");
      e.target.reset()
    }
  }

  return (
    <div className="content-wrapper">
      <div className="row">
        <div className='col-md-12 d-flex'>
          <Link type='button' className="btn btn-success btn-sm btn-icon-text mb-2  ml-auto" to="../manage-service">Manage Service</Link>
        </div>
        <div className="col-8 grid-margin m-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Service Form</h4>
              <p className="card-description">
                Add Service
              </p>
              <form id='service_form' className="forms-sample" onSubmit={handleSubmit} action='' method='post'>
                <div className="form-group">
                  <label htmlFor="service_name">Service Title</label>
                  <input type="text" name='title' className="form-control" id="title" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="service_icon">Icon</label>
                  <div className='row'>
                    <div className="col-6">
                      <input type="text" name='icon' className="form-control" id="icon" placeholder="examples : fa-plus , fa-heart" />
                    </div>
                    <div className='col-2'>
                      <button type='button' className='btn btn-light' data-toggle="tooltip" title="always use second class"><i className="fas fa-info-circle"></i></button>
                    </div>
                    <div className="col-4">
                      <Link target='_blank' to="https://fontawesome.com/v5/search?o=r&m=free" className='btn btn-info '>Get Icon</Link>
                    </div>
                  </div>

                </div>
                <div className="form-group">
                  <label htmlFor="service_description">Description</label>
                  <textarea className="form-control" name="description" id="description" rows={4} defaultValue={""} placeholder='Description...' />
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

export default AddService