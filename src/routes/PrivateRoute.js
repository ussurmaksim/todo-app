import React from "react"
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem("token")

    return (
    <>
        {token ? (
            <Navigate to={<Component {...rest} />} />
        ) : (
            <Navigate to={{ pathname: "/" }} />
        )
        }
    </>
    )

}

export default PrivateRoute;