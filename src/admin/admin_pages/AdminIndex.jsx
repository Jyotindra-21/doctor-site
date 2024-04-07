import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import AHeader from '../admin_components/AHeader'
import AFooter from '../admin_components/AFooter'
import ASidebar from '../admin_components/ASidebar'
import ASetting from '../admin_components/ASetting'
// import "../admin_assets/css/style.css"

function AdminIndex() {
  // const navigate = useNavigate()
  useEffect(() => {
    // navigate("dashboard")
  }, [])
  return (
    <div className="container-scroller">
      <AHeader />
      <div className="container-fluid page-body-wrapper">
        <ASetting />
        <ASidebar />
        <div className="main-panel">
          <Outlet />
          <AFooter />
        </div>
      </div>
    </div>
  )
}

export default AdminIndex