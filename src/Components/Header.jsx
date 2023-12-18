import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import "./Header.css";

function Header(){
let particles_options = {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

  const [bg_img, setBg_img] = useState("");
  const [my_pic, setMy_pic] = useState("");
  const [my_name, setMy_name] = useState("");
  const [profession, setProfession] = useState("");
  const [resume, setResume] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setBg_img(jsonData.general.background);
      setMy_pic(jsonData.general.avatar);
      setMy_name(jsonData.general.name);
      setProfession(jsonData.general.profession);
      setResume(jsonData.general.resume);
    }
    fetchData();
  }, []);

    return(
            <div className="hero-area position-relative bg-half-120" style={{backgroundImage: `url(${bg_img})`}} id="about">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 align-items-center text-center header_container">
                        <div className="title-heading mt-4 pb-60">
                            <img src={my_pic} className="img-fluid rounded-circle" id="float_pic" alt="avatar" />
                            <h1 className="heading font-36 text-white mt-4">Here I'am <span className="text-warning">{my_name}</span></h1>
                            <h6 className="designation mb-3 text-white">{profession}</h6>
                            <a href={resume} className="btn btn-primary btn-sm">Download CV</a>
                        </div>
                    </div>
                </div>
                <Particles params={particles_options} />
            </div>
        </div>
    );
}

export default Header;
