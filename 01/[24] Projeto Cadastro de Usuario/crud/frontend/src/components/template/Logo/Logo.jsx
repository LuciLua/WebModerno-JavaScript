import './Logo.css'
import React from 'react'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <aside className='logo'>
            <Link to="/" className='logo'>
                <img src={logo} alt="logo" />
            </Link>
        </aside>
    )
}