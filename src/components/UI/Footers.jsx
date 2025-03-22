import footercontent from "../../api/footerApi.json";
import { TbMailPlus } from "react-icons/tb"; // Corrected import for TbMail
import { IoCallSharp } from "react-icons/io5"; // Corrected import for IoCallSharp
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
export const Footers = () => {
    const footerIcon = {
        FaLocationDot: <FaLocationDot />, // Use the correct component name
        TbMailPlus: <TbMailPlus />,     // Use the correct component name
        IoCallSharp: <IoCallSharp /> // Use the correct component name
    };

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {footercontent.map((curdata) => {
                    // const { title, details, icon } = curdata; // Destructure properties from curdata

                    return (
                        <div className="footer-contact" key={curdata}>
                            <div className="icon">{footerIcon[curdata.icon]}</div> {/* Use the icon from curdata */}
                            <div className="footer-contact-text">
                                <p>{curdata.title}</p>   {/* Display the title */}
                                <p>{curdata.details}</p> {/* Display the details */}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="copyright">
                <div className="container">
                    <div className="grid grid-two-cols ">
                        <div className="copyright-text">
                        <p className="ptag">Copyright &copy; 2025. All rights reserved...</p>
                        <NavLink to="https://github.com/AADI-PROJECTS" target="_blank">
                        Aadilmalik
                        </NavLink>
                        </div>
                        <div className="footer-menu">
                            <ul className="footer-li">
                                <li>
                                <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="http://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=aadil-malik-b645b62a9" target="_blank">
                                    Linkdin
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://www.blackbox.ai/chat/a5FOUoX" target="_blank">
                                    Source Code
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/Contect">Contect</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};