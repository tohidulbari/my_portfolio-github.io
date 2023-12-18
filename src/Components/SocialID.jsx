import React, { useState, useEffect } from "react";

function SocialID() {
    const [socialID, setSocialID] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const response = await fetch("/data.json");
          const jsonData = await response.json();
          setSocialID(jsonData.social_id);
        }
        fetchData();
    }, []);
    return (
    <>
    {socialID.map((sid, i) => {
        return(
            <a key={i} href={sid.url} className="rounded-circle" target="_blank" rel="noreferrer">
                <i className={`fab fa-${sid.platform} fa-lg text-secondary mx-1`}></i>
            </a>
            );
    })}
    </>
    );
}

export default SocialID;