import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Classes from "../components/classes/Classes";
import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return(
        <Fragment>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<UserCrud />} />
                <Route path='/classes' element={<Classes />} />
                <Route path='*' element={<Home />} />
            </Routes>
        </ Fragment>
    )
}