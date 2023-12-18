import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "react-image-lightbox/style.css";

function ShowcaseView() {
    const location = useLocation();

    const [bg_img, setBg_img] = useState("");
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data.json");
            const jsonData = await response.json();
            setBg_img(jsonData.general.background);
        }
        fetchData();
    }, []);
	const {title, description, made_with, types, date, url, thumbnail, preview_img} = location.state;
	const preview_img_list = preview_img.split("|");
	preview_img_list.unshift(thumbnail);

	const showcase_layer = {
    background: "linear-gradient(rgb(88 90 92 / 38%) 10%, rgb(22 28 45 / 39%))",
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
<Link to="/projects" className="text-muted"><small><i class="fas fa-chevron-left"></i> Back To Inventory</small></Link>
</div>
<div className="col-lg-8">
<div className="row">
<div className="col-12">
	<div className="work-details rounded">
	    <h4 className="title mb-3 border-bottom pb-3">{title}</h4>
	    <p className="text-muted" style={{"whiteSpace": "pre-line"}}>{description}</p>
	</div>
</div>
<div className="col-12 my-4">
	<div className="work-details bg-light rounded">
	    <h4 className="title border-bottom pb-3 mb-3">Project Info :</h4>
	      <ul className="list-unstyled mb-0">
	         <li className="mt-3">
	             <b>Type :</b>
	             <span>{types}</span>
	         </li>
	         <li className="mt-3">
	             <b>Made with :</b>
	             <span>{made_with}</span>
	         </li>
	         <li className="mt-3">
	             <b>Date :</b>
	             <span>{date}</span>
	         </li>
	         <li className="mt-3">
	             <b>URL :</b>
	             <span>
					{(url === "") ? <span className="text-muted">not available!</span> : <a href={url} className="text-info" target="_blank" rel="noreferrer">{url}</a>}
				 </span>
	         </li>
	      </ul>                          
	</div>

</div>
</div>
</div>
<div className="col-lg-4">
<div className="card card-body shadow-sm">
<h6 className="text-muted mb-0 text-center">Snapshots</h6>
<hr className="text-muted w-25 mx-auto mt-0" />
<div className="gallery" id="gallery">

{preview_img_list.map((img, i) => {
	return(
		<div key={i} className="pics animation mb-2 work-container work-modern position-relative d-block overflow-hidden rounded" onMouseOver={() => setBg_img(img)}>
		  <img className="img-fluid z-depth-1 rounded" src={img} alt="preview" />
		  <div className="overlay-work bg-dar" style={showcase_layer}></div>
		  <div className="content w-100 h-100 d-flex justify-content-center align-items-center">
		  	<button className="btn btn-dark btn-sm rounded text-white" onClick={() => setIsOpen(true)}><i className="fas fa-compress-arrows-alt fa-lg"></i></button>
		  </div>
		</div>
	)
})}


  	{isOpen && (
        <Lightbox
          mainSrc={preview_img_list[photoIndex]}
          nextSrc={preview_img_list[(photoIndex + 1) % preview_img_list.length]}
          prevSrc={preview_img_list[(photoIndex + preview_img_list.length - 1) % preview_img_list.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + preview_img_list.length - 1) % preview_img_list.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % preview_img_list.length)
          }
        />
      )}
</div>
</div>
</div>
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

export default ShowcaseView;