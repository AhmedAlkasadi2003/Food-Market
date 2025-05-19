import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from "react-router-dom"
import Footer from '../components/Footer'
export default function MainLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>

      
    </div>
  )
}
