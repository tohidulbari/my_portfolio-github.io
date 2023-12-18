import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
    
        const submitBtn = document.getElementById("submitBtn");
        submitBtn.innerHTML = "Sending <img src='loader.gif' alt='loading' style='width: 20px;'>";
        submitBtn.disabled = true;
    
        emailjs.sendForm("service_54z6u0k", "template_beugrd9", form.current, "r47MLi6JCWEt18h46")
          .then((result) => {
            setIsLoading(false);
            setIsSuccess(true);
            submitBtn.innerHTML = "Send";
            submitBtn.disabled = false;
            form.current.reset();
          })
          .catch((error) => {
            console.log(error.text);
          });
    };

    const handleAlertDismiss = () => {
        setIsSuccess(false);
    };
    return (
            <section className="section pt-5" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center mb-4">
                        <div className="container-title text-center">
                            <div className="titles">
        <h2 className="title text-capitalize">Get In Touch</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
              <iframe title="map" width="100%" height="264" src="https://maps.google.com/maps?q=23.807536695073736%2C%2090.37902686611113&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
            </div>
<div className="col-lg-12" id="mail_input_div">
<div className="custom-form mb-sm-30">
<form ref={form} onSubmit={sendEmail}>
<div className="row">
<div className="col-lg-6">
<div className="row">
<div className="col-lg-12 col-md-6">
<div className="form-group">
<input type="text" name="user_name" className="form-control border rounded" placeholder="Name :" required />
</div>
</div>
<div className="col-lg-12 col-md-6">
<div className="form-group">
<input type="email" name="user_email" className="form-control border rounded" placeholder="Email :" required />
</div> 
</div>
</div>
</div>
<div className="col-lg-6">
<div className="form-group">
<textarea name="message" className="form-control border rounded" placeholder="Message..." rows="4" required></textarea>
</div>
</div>
</div>
<div className="row">
{isSuccess && (
<div className="col-md-4 mx-auto">
<div className="alert alert-success alert-dismissible fade show d-flex justify-content-between" role="alert">
Email sent successfully!
<i className="fas fa-times text-dark close" data-dismiss="alert" onClick={handleAlertDismiss} style={{cursor: "pointer"}}></i>
</div>
</div>
)}
<div className="col-sm-12 text-end text-center">
<button type="submit" className="btn btn btn-primary rounded" id="submitBtn" disabled={isLoading}>Send</button>
</div>
</div>
</form>
</div>
</div>
</div>
</div>
</section>
    );
}

export default Contact;