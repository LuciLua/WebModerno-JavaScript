import './Header.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <header className='header d-none d-sm-flex flex-column'>
            <h1 className="mt-3">
                <i className={`fa fa-${props.icon} mr-2`}></i>
                <i>{props.title}</i>
            </h1>
            <p className="lead text-muted">
                {props.subtitle}
            </p>
        </header>
    )
}