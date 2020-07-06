import React from "react";

function Contact() {

    return(
     
    <form>
    <div className="holder">
    <input type="text" placeholder="Your Name" />
    </div>
    <div className="holder">
    <input type="text" placeholder="Email Address" />
    </div>
    <div className="holder">
    <input type="text" placeholder="Message" />
    </div>
    <div className="holder">
    <a href="mailto:vipulgupta9594@gmail.com">Email me</a>
    </div>
    </form>
    );
    
}

export default Contact;