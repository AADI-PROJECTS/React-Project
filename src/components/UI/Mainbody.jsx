import { MdOutlineTravelExplore } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const Mainbody=()=>{
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl">
                        Explore the World,One Country at a Time.
                    </h1>
                    <p className="paragraph">
                        Discover the history culture and beauty of every nation,sort,search,and filter
                        through countries to find the details you need.
                    </p>
                    <NavLink to="/country">
                    <button className="btn btn-darken btn-inline bg-white-box">
                        Start Exploring <MdOutlineTravelExplore />
                    </button>
                    </NavLink>
                </div>
                <div className="hero-image">
                    <img src="/image/countryweb-rem.png" alt="world img" className="banner-image"></img>
                </div>
            </div>
        </main>
    )
};