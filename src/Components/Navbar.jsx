import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(){
const [logo, setLogo] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setLogo(jsonData.general.logo);
    }
    fetchData();
  }, []);

    return(
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
            <div className="container">
                <Link className="logo navbar-brand" to="/" dangerouslySetInnerHTML={{__html: logo}}></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                    {(window.location.pathname === "/project-view" || window.location.pathname === "/projects") 
                    ? <ul className="navbar-nav navbar-nav-link ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/#about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#service">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#testimonial">Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/#contact">Contact</Link>
                        </li>
                        </ul>
                        : <ul className="navbar-nav navbar-nav-link ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#service">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonial">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        </ul>}
                </div> 
            </div>
        </nav>
    );
}

export default Navbar;