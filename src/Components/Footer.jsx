import React, { useState, useEffect } from 'react';
import ScrollToTop from "react-scroll-to-top";
import "./Footer.css";
import FooterSocialID from "./FooterSocialID";

function Footer() {
  const [copyright, setCopyright] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setCopyright(jsonData.general.footer_copyright);
    }
    fetchData();
  }, []);
    return (
        <>
<footer className="footer bg-light">
<div className="container">
<div className="row justify-content-center">
<div className="col-12 text-center">
<ul className="list-unstyled social-icon">
<FooterSocialID />
</ul> 
<p dangerouslySetInnerHTML={{__html: copyright }} />
</div>
</div>
</div>
</footer>
<ScrollToTop smooth component={<i className="fas fa-chevron-up"></i>} />
        </>
    );
}

export default Footer;