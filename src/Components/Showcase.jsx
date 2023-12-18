import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Showcase() {
  const [showcase, setShowcase] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
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
<section className="section bg-white py-2 mt-4" id="projects">
<div className="container">
    <div className="row justify-content-center">
        <div className="col-12 text-center">
            <div className="container-title text-center mb-1 pb-2">
            <div className="titles">
                <h2 className="title text-capitalize">Showcase</h2>
                <small className="text-light-muted">Some Of My Works</small>
            </div>
            </div>
        </div>
    </div>
<div className="row">
{showcase.slice(0, 6).map((project, i) => {
    return(
        <div key={i} className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
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
<div className="col-12 mt-4 pt-2">
    <div className="text-center">
        <Link to="/projects" className="btn btn-primary btn-sm rounded">See More <i className="fas fa-chevron-right"></i></Link>
    </div>
</div>
</div>
</div>
</section>
    );
}

export default Showcase;