import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <React.Fragment>
            <li className="list-group-item">
                {props.name}
            </li>
        </React.Fragment>
    )
}