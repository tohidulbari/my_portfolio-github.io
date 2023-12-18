import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function ShowcaseAll() {
    const [bg_img, setBg_img] = useState("");
    const [showcase, setShowcase] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data.json");
            const jsonData = await response.json();
            setBg_img(jsonData.general.background);
            setShowcase(jsonData.showcases);
        }
        fetchData();
    }, []);

	const showcase_layer = {
    background: "linear-gradient(rgba(88, 90, 92, 0.78) 10%, rgb(22, 28, 45))",
    height: "50px",
    marginTop: "auto"
  }
    return (
        <>
        <Navbar />
	        <div className="hero-area position-relative" style={{backgroundImage: `url(${bg_img})`, padding: "100px 0 50px 0"}} id="about">
	            <div className="bg-overlay"></div>
	            <div className="container-fluid">
	                <div className="row">
	                    <div className="col-lg-12 col-md-12">
	                        <div className="card card-body">
<div className="card" style={{border: "none"}}>
<div className="row">
<div className="col-12 mb-2">
<Link to="/" className="text-muted"><small><i class="fas fa-chevron-left"></i> Back To Home</small></Link>
</div>
{showcase.map((project, i) => {
    return(
        <div key={i} className="col-lg-3 col-md-6 col-12 my-2" onMouseOver={() => setBg_img(project.thumbnail)}>
            <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                <div className="card-body p-0">
                    <img src={project.thumbnail} className="img-fluid" alt="thumbnail" />
                    <div className="overlay-work bg-dar" style={showcase_layer}></div>
                    <div className="content">
                      <Link to="/project-view" state={project} className="text-white title">{project.title}</Link>
                    </div>
                    <div className="icons text-center">
                        <Link to="/project-view" state={project} className="btn btn-dark btn-sm d-inline-block rounded-pill">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
})}
</div>
</div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
        <Footer />
        </>
    );
}

export default ShowcaseAll;