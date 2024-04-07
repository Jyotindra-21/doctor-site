import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function UpdateService() {

  const navigate = useNavigate()
  const [service, setService] = useState({
    title: "",
    icon: "",
    description: "",
    id: ""

  })
  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value })
  }
  const { serviceID } = useParams()
  const updateService = async (id) => {
    const response = await axios.get(`http://localhost:3000/services/${id}`)
    if (response.status == 200) {
      setService(response.data)
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    for (const [key, value] of formData.entries()) {
      if (value === '') {
        toast.error(`${key} is required!`);
        document.querySelector(`#${key}`).focus()
        return;
      }
    }
    const newService = Object.fromEntries(formData)
    const response = await axios.patch(`http://localhost:3000/services/${service.id}`, { ...newService })
    if (response.status === 200) {
      toast.success("Service Update Successfully.");
      e.target.reset()
      navigate('/admin/manage-service')

    }
  }
  useEffect(() => {
    updateService(serviceID)
  }, [])
  return (
    <div className="content-wrapper">
      <div className="row">
        <div className="col-8 grid-margin m-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Update Service</h4>
              <form id='service_form' className="forms-sample" onSubmit={handleSubmit} action='' method='post'>
                <div className="form-group">
                  <label htmlFor="s_Ftitle">Service Title</label>
                  <input type="text" name='title' onChange={handleChange} value={service.title} className="form-control" id="s_title" placeholder="Service Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="s_icon">Icon</label>
                  <div className='row'>
                    <div className="col-6">
                      <input type="text" name='icon' onChange={handleChange} value={service.icon} className="form-control" id="s_icon" placeholder="examples : fa-plus , fa-heart" />
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
                  <label htmlFor="s_description">Description</label>
                  <textarea className="form-control" onChange={handleChange} value={service.description} name="description" id="s_description" rows={4} placeholder='Description...' />
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

export default UpdateService