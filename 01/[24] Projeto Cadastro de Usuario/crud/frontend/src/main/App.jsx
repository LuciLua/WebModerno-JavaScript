import './App.css'
import React from 'react'

// Components
import Main from '../components/template/Main/Main'
import Logo from '../components/template/Logo/Logo'
import Nav from '../components/template/Nav/Nav'
import Footer from '../components/template/Footer/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <div className="app">
            <Logo />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}