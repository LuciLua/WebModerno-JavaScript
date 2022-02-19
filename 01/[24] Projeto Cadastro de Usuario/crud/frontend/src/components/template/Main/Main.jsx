import './Main.css'
import React, { Fragment } from 'react'

import Header from '../Header/Header'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Fragment>
            <Header />
            <main className="content">
                Conteúdo
            </main>
        </Fragment>
    )
}