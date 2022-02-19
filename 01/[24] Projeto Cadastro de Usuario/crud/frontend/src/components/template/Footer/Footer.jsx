import './Footer.css'
import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <footer className="footer">
            <span>
                Desenvolvido com 
                <i className="ml-2 fa fa-heart text-danger"></i>
                <strong className='ml-1'>Cod<span className='text-danger'>3</span>r</strong>
                </span>
        </footer>
    )
}