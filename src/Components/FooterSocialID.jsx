import React, { useState, useEffect } from "react";

function FooterSocialID() {
const [fSocialID, setFSocialID] = useState([]);
useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setFSocialID(jsonData.social_id);
    }
    fetchData();
}, []);
    return (
    <>
    {fSocialID.map((fsid, i) => {
        return(
            <li key={i} className="list-inline-item me-1">
              <a href={fsid.url} className="rounded-circle" target="_blank" rel="noreferrer">
                <i className={`fab fa-${fsid.platform}`}></i>
              </a>
            </li>
            );
    })}
    </>
    );
}

export default FooterSocialID;