import React, { Fragment } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Fragment>
            <a href={props.href}>
                <i className={`fa fa-${props.icon} mr-1`}></i>
                {props.label}
            </a>
        </Fragment>
    )
}