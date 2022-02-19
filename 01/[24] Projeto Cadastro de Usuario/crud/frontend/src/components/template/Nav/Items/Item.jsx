import React, { Fragment } from "react";

import { Link } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Fragment>
            <Link to={props.href}>
                    <i className={`fa fa-${props.icon} mr-1`}></i>
                    {props.label}
            </Link>
        </Fragment>
    )
}