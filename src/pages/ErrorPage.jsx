import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage =()=>{
    const error=useRouteError();
    return <div>
        <h1>oops we got a error</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/">
        <button>GO HOME</button>
        </NavLink>
    </div> 
}