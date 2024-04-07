import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import "./admin/admin_assets/vendors/js/vendor.bundle.base.js"
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <HelmetProvider>
      <Helmet>
        {/*WEBSITE  */}
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- base:js --> */}
        <script defer src="http://localhost:5173/src/admin/admin_assets/vendors/js/vendor.bundle.base.js"></script>
        {/* <script defer src="https://code.jquery.com/jquery-3.7.1.min.js"></script> */}
        <script defer src="http://localhost:5173/src/website/assets/lib/wow/wow.min.js"></script>
        <script defer src="http://localhost:5173/src/website/assets/lib/easing/easing.min.js"></script>
        <script defer src="http://localhost:5173/src/website/assets/lib/waypoints/waypoints.min.js"></script>
        <script defer src="http://localhost:5173/src/website/assets/lib/counterup/counterup.min.js"></script>
        <script defer src="http://localhost:5173/src/website/assets/lib/owlcarousel/owl.carousel.min.js"></script>
        <script defer src="http://localhost:5173/src/website/assets/lib/tempusdominus/js/moment.min.js"></script>
        <script defer src="http://localhost:5173/src/website/assets/lib/tempusdominus/js/moment-timezone.min.js"></script>
        {/* <script deffer src="https://cdnjs.cloudflare.com/ajax/libs/tempusdominus-bootstrap-4/5.1.2/js/tempusdominus-bootstrap-4.min.js"></script> */}
        {/* <script defer src="http://localhost:5173/src/website/assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script> */}
        <script defer src="http://localhost:5173/src/website/assets/js/main.js"></script>

        {/* ADMIN */}
        {/* <!-- endinject --> */}
        {/* <!-- Plugin js for this page--> */}
        <script defer src="http://localhost:5173/src/admin/admin_assets/vendors/chart.js/Chart.min.js"></script>
        {/* <!-- End plugin js for this page-->
      <!-- inject:js --> */}
        <script defer src="http://localhost:5173/src/admin/admin_assets/js/off-canvas.js"></script>
        <script defer src="http://localhost:5173/src/admin/admin_assets/js/hoverable-collapse.js"></script>
        <script defer src="http://localhost:5173/src/admin/admin_assets/js/template.js"></script>
        <script defer src="http://localhost:5173/src/admin/admin_assets/js/settings.js"></script>
        <script defer src="http://localhost:5173/src/admin/admin_assets/js/todolist.js"></script>
        {/* <!-- endinject -->
      <!-- Custom js for this page--> */}
        <script defer src="http://localhost:5173/src/admin/admin_assets/js/dashboard.js"></script>
      </Helmet>
      <App />
    </HelmetProvider>
    {/* <Home /> */}
  </>)
