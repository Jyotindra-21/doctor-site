import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Helmet } from 'react-helmet-async'

// import "../assets/css/style.css"
function Index() {

    return (
        <>
            
            <Header />
            <Outlet />
            <Footer />

            
        </>
    )
}
export default Index