import React, { useState, useEffect } from "react";

function Skills() {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setSkill(jsonData.skills);
    }
    fetchData();
  }, []);
return (
<section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center">
                            <div className="titles">
<p className="text-capitalize mb-4">Work Expertise &amp; Technologies I Know</p>
                            </div>
                        </div>
                    </div>
                </div>
<div className="row">
<div className="col">
<div className="card explore-feature border-0 text-center bg-light p-3">
<div className="card-body p-0">
{skill.map((skill, i) => 
    <div key={i} className="skill-icon rounded-circle shadow-lg d-inline-block" title={skill.title}>
        <img src={`/skills/${skill.icon}.png`} alt={skill.title} className="img-fluid mx-auto" />
    </div>
)}
</div>
</div>
</div>
</div>
</div>
</section>
    );
}

export default Skills;