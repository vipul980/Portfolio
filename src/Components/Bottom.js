import React from "react";
import Contact from "./Contact";

function Bottom() {
    return (
    <div className="bottomContainer">
    
    <h2>Get in touch</h2>
     
     <div className="Box">
     <div className="myText">
     <h3>If you love pani puri as much as I do.</h3>
     <p className="contactMssg">Love pani puri's as much as I do? Let's talk about how awesome they are! We can code while we eat pani puri!</p>
     </div>
    <div className="Address">
     <h3>ADDRESS</h3>
       <div className="location">
          <div className="icon">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          </div>
          <h4>Mulund, Mumbai</h4>
       </div>
       <div className="phone">
          <div className="icon">
          <i class="fa fa-phone" aria-hidden="true"></i>
          </div>
          <h4>9594028726</h4>
       </div>
       <div className="mail">
          <div className="icon">
          <i class="fa fa-at" aria-hidden="true"></i>
          </div>
          <h4>vipulgupta9594@gmail.com</h4>
       </div>
    </div>
    <div className="form">
          <Contact />
       </div>
     </div>
       
     </div>
    );
} 

export default Bottom; 