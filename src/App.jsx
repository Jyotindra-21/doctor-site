import React from 'react'
import Home from './website/pages/Home'
import Index from './website/pages/Index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './website/pages/About'
import Service from './website/pages/Service'
import Contact from './website/pages/Contact'
import Feature from './website/pages/Feature'
import Doctor from './website/pages/Doctor'
import Appointment from './website/pages/Appointment'
import Testimonial from './website/pages/Testimonial'
import AdminIndex from './admin/admin_pages/AdminIndex'
import AHome from './admin/admin_pages/AHome'
import Login from './admin/admin_pages/Login'
import ManageService from './admin/admin_pages/ManageService'
import AddService from './admin/admin_pages/AddService'
import ManageDoctor from './admin/admin_pages/ManageDoctor'
import AddDoctor from './admin/admin_pages/AddDoctor'
import ManageAppointment from './admin/admin_pages/ManageAppointment'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ManageContact from './admin/admin_pages/ManageContact'
import PageNotFound from './website/pages/PageNotFound'
import Register from './admin/admin_pages/Register'
import ManageAdmin from './admin/admin_pages/ManageAdmin'
import Profile from './website/pages/Profile'
import AdminProfile from './admin/admin_pages/AdminProfile'
import UpdateService from './admin/admin_pages/UpdateService'
import UpdateDoctor from './admin/admin_pages/UpdateDoctor'

// Create the function
export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

function App() {

  React.useEffect(() => {

  })
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='service' element={<Service />} />
            <Route path='pages'>
              <Route path='feature' element={<Feature />} />
              <Route path='team' element={<Doctor />} />
              <Route path='appointment' element={<Appointment />} />
              <Route path='testimonial' element={<Testimonial />} />
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='contact' element={<Contact />} />
            {/* ADMIN ROUTES */}

          </Route>
          <Route path='/admin' element={<AdminIndex />} >
            <Route index element={<AHome />} />

            <Route path='manage-service' element={<ManageService />} />
            <Route path='add-service' element={<AddService />} />
            <Route path='service/:serviceID' element={<UpdateService />} />

            <Route path='manage-doctor' element={<ManageDoctor />} />
            <Route path='add-doctor' element={<AddDoctor />} />
            <Route path='doctor/:doctorID' element={<UpdateDoctor />} />

            <Route path='manage-appointment' element={<ManageAppointment />} />
            <Route path='manage-admin' element={<ManageAdmin />} />
            {/* <Route path='manage-appointment/:id' element={<EditAppointment/>} */}
            <Route path='manage-contact' element={<ManageContact />} />
            <Route path='profile' element={<AdminProfile />} />
          </Route>
          <Route path='/admin/login' element={<Login />} />
          <Route path='/admin/register' element={<Register />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App