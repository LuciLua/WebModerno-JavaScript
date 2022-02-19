import React from 'react'

// Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

// Components
import Logo from '../components/template/Logo/Logo'
import Nav from '../components/template/Nav/Nav'
import Footer from '../components/template/Footer/Footer'
import Home from '../components/home/Home'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div className="app">
            <Logo />
            <Nav />
            <Home/>
            <Footer />
        </div>
    )
}