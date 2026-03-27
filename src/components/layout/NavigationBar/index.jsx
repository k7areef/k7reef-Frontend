import React from "react";
import MenuToggler from "./components/MenuToggler";
import AppLogo from "./components/AppLogo";
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";

const links = [
    { to: "home", label: "Home" },
    { to: "projects", label: "Projects" },
    { to: "services", label: "Services" },
    // { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "contact", label: "Contact" }
];

function NavigationBar() {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navigate = useNavigate();

    return (
        <nav className="py-4 fixed w-full top-0 z-50 backdrop-blur-md bg-grey/60">
            <div className="container flex items-center justify-between max-md:flex-wrap">
                <AppLogo onClick={() => setMenuOpen(false)} />
                <MenuToggler menuOpen={menuOpen} onClick={() => setMenuOpen(prev => !prev)} />
                <div className={`nav-links max-md:w-full grid transition-all duration-200 ${menuOpen ? "max-md:grid-rows-[1fr] max-md:mt-5" : "max-md:grid-rows-[0fr]"}`}>
                    <div className={`links-wrapper overflow-hidden transition-all duration-300 ease-in ${menuOpen ? "max-md:opacity-100 delay-75" : "max-md:opacity-0"}`}>
                        <div className="links flex md:items-center gap-1 max-md:flex-col">
                            {
                                links.map((link, index) => (<Link
                                    href="" // ! This to imporve SEO
                                    key={index}
                                    to={link.to}
                                    smooth={true}
                                    spy={true}
                                    duration={300}
                                    offset={-64}
                                    onClick={() => {
                                        navigate('/')
                                        setMenuOpen(false)
                                    }}
                                    activeStyle={{ backgroundColor: "#8618e2" }}
                                    className={`font-medium text-lg block py-1.5 px-4 md:px-5 rounded-sm cursor-pointer transition duration-200`}
                                >
                                    {link.label}
                                </Link>))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavigationBar