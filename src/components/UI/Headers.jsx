import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Headers =()=>{
    const [show ,setshow]=useState(false);

    const handleButtonToggle=()=>{
        return setshow(!show);
    }
    return <header>
        <div className="container">
            <div className="grid navbar-grid">
                <div className="Logo">
                    <NavLink to="/">
                    <h1>WorldTour</h1>
                    </NavLink>
                </div>
                <nav className={show ? "menu-mobile" : "menu-web"}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contect">Contect</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Country">Country</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="ham-menu">
                    <button onClick={handleButtonToggle}>
                    <GiHamburgerMenu />
                    </button>
                </div>
            </div>
        </div>
    </header>
}