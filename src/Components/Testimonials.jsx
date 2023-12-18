import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Review from "./ClientsReview";

function Testimonials() {
const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
    ],
    appendDots: dots => (
        <div>
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div><i className="fas fa-minus fa-sm text-info"></i></div>
      )

  };

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setReviews(jsonData.reviews);
    }
    fetchData();
  }, []);

    return (
            <section className="section bg-white" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
<h2 className="title text-capitalize mb-4">What Clients Say</h2>
                            </div>
                        </div>
                    </div>
                </div>
<div className="row">
<div className="col-12">
<Slider {...settings}>
{reviews.map((data, i) =>
      <Review key={i} avatar={data.avatar} name={data.name} flag={data.flag} country={data.country} star={data.star} comment={data.comment} />
)}
</Slider>
</div>
</div>
</div>
</section>
    );
}

export default Testimonials;