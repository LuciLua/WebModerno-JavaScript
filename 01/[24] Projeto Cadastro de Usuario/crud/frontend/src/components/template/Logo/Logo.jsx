import './Logo.css'
import React from 'react'
import logo from '../../../assets/images/logo.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <aside className='logo'>
            <a href="/" className="logo">
                <img src={logo} alt="logo" />
            </a>
        </aside>
    )
}