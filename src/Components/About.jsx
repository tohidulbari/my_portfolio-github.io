import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import SocialID from "./SocialID";

function About() {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");
  const [location, setLocation] = useState("");
  const [expertise, setExpertise] = useState("");
  const [bio, setBio] = useState("");

  let profession_ref = useRef(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setEmail(jsonData.about.email);
      setLanguage(jsonData.about.language);
      setLocation(jsonData.about.location);
      setExpertise(jsonData.about.expertise);
      setBio(jsonData.about.bio);
    }
    fetchData();
    
    const typed = new Typed(profession_ref.current, {
      strings: expertise.split(","),
      typeSpeed: 100,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  });

  return (
<section className="bg-light">
<div className="container">
<div className="row">
<div className="col-lg-12">
<div className="card public-profile border-0 rounded shadow no-margin z-depth-1">
<div className="card-body">
<div className="row align-items-center">
<div className="col-lg-3 col-md-4 text-md-start">
<div className="about-details key-feature bg-light">
<div className="media-body content">
<h6 className="title mb-2">About me</h6>
<div className="bor-bottom mt-2 mb-2"></div>
<p className="text-muted mb-2 mt-3 font-14" title="Email Address"><i className="fas fa-envelope"></i> {email}</p>
<p className="text-muted mb-2 font-14" title="Language"><i className="fas fa-globe"></i> {language}</p>
<p className="text-muted mb-2 font-14" title="Location"><i className="fas fa-map-marker"></i> {location}</p>
</div>
</div>
</div>
<div className="col-lg-9 col-md-8">
<div className="row align-items-end">
<div className="col-md-12 text-md-start mt-4 mt-sm-0">
<h4 className="heading me-2">I Am&nbsp; 
<span ref={profession_ref} className="text-primary"></span>
</h4>
<p className="text-light-muted mt-2">{bio}</p>
<SocialID />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
    );
}

export default About;