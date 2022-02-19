import React from 'react'

// Styles
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

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
            <Main 
                icon="home" 
                title="Início" 
                subtitle="Segundo projeto do capítulo de React."/>
            <Footer />
        </div>
    )
}